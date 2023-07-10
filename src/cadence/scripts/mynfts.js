export const getMyNFTs = `
import ConnectNFTTT from 0x9bc317d3336ad75a
import NonFungibleToken from 0x631e88ae7f1d7c20

pub fun main(account: Address): [&AnyResource] {
  
    let collection = getAccount(account).getCapability(/public/ConnectCollection)
                    .borrow<&ConnectNFTT.Collection{ConnectNFTT.CollectionPublic, NonFungibleToken.CollectionPublic}>()
                    ?? panic("Can't get the User's collection.")

    let returnVals: [&AnyResource] = [] 
    let ids = collection.getIDs()    
    for id in ids {
    returnVals.append(collection.borrowNFT(id: id))
  }

  return returnVals}
`