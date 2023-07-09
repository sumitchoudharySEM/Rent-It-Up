export const setupUserTx= `
import ConnectNFTT from 0x9bc317d3336ad75a
import NonFungibleToken from 0x631e88ae7f1d7c20

transaction {

  prepare(acct: AuthAccount) {

  acct.save(<- ConnectNFTT.createEmptyCollection(), to:/storage/ConnectCollection)
  acct.link<&ConnectNFTT.Collection{ConnectNFTT.CollectionPublic, NonFungibleToken.CollectionPublic}>(/public/ConnectCollection, target:/storage/ConnectCollection )

  acct.link<&ConnectNFTT.Collection>(/private/ConnectCollection, target:/storage/ConnectCollection )

  }

  execute {
    log("user stored collection inside there account")
  }
}`