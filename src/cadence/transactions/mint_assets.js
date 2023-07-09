export const mintNFT= `
import ConnectNFTT from 0x3aeeb4de672c74b1

transaction(ipfshash:String, name:String, price:UFix64, pricePerDay:UFix64) {

  prepare(acct: AuthAccount) {
    let collection = acct.borrow<&ConnectNFTT.Collection>(from: /storage/ConnectNFCollection)
                ??panic("no such collection found")
    let nft <- ConnectNFTT.createToken(ipfshash:ipfshash, metadata:{"name":name}, price:price, pricePerDay:pricePerDay)
    collection.deposit(token: <- nft)
  }

  execute {
    log("a new nft is created and stored in users account")
  }
}`