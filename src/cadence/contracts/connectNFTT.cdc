import NonFungibleToken from 0x01

import NonFungibleToken from "./NonFungibleToken.cdc"
import FungibleToken from "./FungibleToken.cdc"
import FlowToken from "./FlowToken.cdc"

pub contract ConnectNFTT: NonFungibleToken {

    pub var totalSupply: UInt64

    pub event ContractInitialized()
    pub event Withdraw(id: UInt64, from: Address?)
    pub event Deposit(id: UInt64, to: Address?)

    pub resource NFT:NonFungibleToken.INFT {
      pub let id: UInt64
      pub var pricePerDay: UFix64
      pub var stackPrice: UFix64
      pub let ipfshash: String
      pub let metadata: {String: String}

      init(_ipfshash:String, _metadata: {String:String}, _price:UFix64, _pricePerDay:UFix64){
        self.id = ConnectNFTT.totalSupply
        ConnectNFTT.totalSupply = ConnectNFTT.totalSupply +1
        self.ipfshash = _ipfshash
        self.metadata = _metadata
        self.stackPrice = _price
        self.pricePerDay = _pricePerDay
      }
    }

    pub resource interface CollectionPublic{
      pub fun borrowEntireNFT(id:UInt64):&ConnectNFTT.NFT
      pub fun purchase(id:UInt64, numberDay:UInt64, recipentCollection: &ConnectNFTT.Collection{NonFungibleToken.CollectionPublic}, payment:@FlowToken.Vault)
    }

    pub resource Collection: NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic, CollectionPublic{

      pub var ownedNFTs: @{UInt64: NonFungibleToken.NFT}

      pub fun withdraw(withdrawID: UInt64): @NonFungibleToken.NFT {
        let token <- self.ownedNFTs.remove(key:withdrawID ) ?? panic("this nft does not exist")
        emit Withdraw(id: withdrawID, from: self.owner?.address)
        return <-token
      }

      pub fun deposit(token: @NonFungibleToken.NFT){
        let mytoken <- token as! @ConnectNFTT.NFT
        emit Deposit(id: mytoken.id,to: self.owner?.address )
        self.ownedNFTs[mytoken.id] <-! mytoken
      }

      pub fun getIDs(): [UInt64]{
        return self.ownedNFTs.keys
      }

      pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT {
        return (&self.ownedNFTs[id] as &NonFungibleToken.NFT?)!
      }

      pub fun borrowEntireNFT(id:UInt64) :&ConnectNFTT.NFT{
        let refrence = (&self.ownedNFTs[id] as auth &NonFungibleToken.NFT?)!
        return refrence as! &ConnectNFTT.NFT
      }

      pub fun purchase(id:UInt64, numberDay:UInt64, recipentCollection: &ConnectNFTT.Collection{NonFungibleToken.CollectionPublic}, payment:@FlowToken.Vault){
        pre {
          payment.balance == self.borrowEntireNFT(id: id).pricePerDay * UFix64(numberDay) + self.borrowEntireNFT(id: id).stackPrice: "hii you entered wrong amount"
        } 
        let nft <- self.withdraw(withdrawID: id)
        recipentCollection.deposit(token: <-nft)
        let FlowTokenVault  =self.owner!.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReciver)
        FlowTokenVault.borrow()!.deposit(from: <- payment)
      }

      init(){
        self.ownedNFTs <- {}
      }

      destroy(){
        destroy self.ownedNFTs
      }
    }

  pub fun createEmptyCollection() : @NonFungibleToken.Collection{
    return <- create Collection()
  }  

  pub fun createToken(ipfshash:String, metadata:{String: String},  price:UFix64, pricePerDay:UFix64) :@ConnectNFTT.NFT{
    return <- create NFT(_ipfshash :ipfshash, _metadata:metadata, _price:price, _pricePerDay:pricePerDay)
  }

  init(){
    self.totalSupply =0
  }

}
