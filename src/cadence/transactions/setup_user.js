export const setupUserTx= `
import ConnectNFTT from 0x3aeeb4de672c74b1
import NonFungibleToken from 0x631e88ae7f1d7c20

transaction {

  prepare(acct: AuthAccount) {

  acct.save(<- ConnectNFTT.createEmptyCollection(), to:/storage/ConnectNFCollection)
  acct.link<&ConnectNFTT.Collection{ConnectNFTT.CollectionPublic, NonFungibleToken.CollectionPublic}>(/public/ConnectNFCollection, target:/storage/ConnectNFCollection )

  acct.link<&ConnectNFTT.Collection>(/private/ConnectNFCollection, target:/storage/ConnectNFCollection )

  }

  execute {
    log("user stored collection inside there account")
  }
}`