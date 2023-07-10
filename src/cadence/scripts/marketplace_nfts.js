export const getMyNFTs = `
import ConnectNFTTT from 0x9bc317d3336ad75a
import NonFungibleToken from 0x631e88ae7f1d7c20
pub fun main(account: Address): {Address:{UInt64: &ConnectNFTT.NFT} } {
    
    let collection = getAccount(account).getCapability(/public/ConnectNFTCollection)
                    .borrow<&ConnectNFTT.Collection{ConnectNFTT.CollectionPublic, NonFungibleToken.CollectionPublic}>()
                    ?? panic("Can't get the User's collection.")

    let saleIDs = collection.getIDs()
    let allUsers = ConnectNFTT.allUsers
    let returnVals:{Address:{UInt64: &ConnectNFTT.NFT} } ={}  

    for user in allUsers {

      let collection = getAccount(user).getCapability(/public/ConnectNFTCollection)
                    .borrow<&ConnectNFTT.Collection{ConnectNFTT.CollectionPublic, NonFungibleToken.CollectionPublic}>()
                    ?? panic("Can't get the User's collection.")
      let ids = collection.getIDs()
      let value:{UInt64: &ConnectNFTT.NFT} ={}

       for id in ids {
        let nftRef = collection.borrowEntireNFT(id: id)
        value.insert(key:id, nftRef)
      }
      returnVals.insert(key: user, value)
    }

  return returnVals
}`