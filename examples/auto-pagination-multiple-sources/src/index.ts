import { getBuiltGraphSDK } from '../.graphclient'

const sdk = getBuiltGraphSDK()

sdk
  .IndexerAllocationCreations({
    first: 2500,
    skip: 0,
  })
  .then((data) => {
    console.assert(
      data.allocationCreatedEvents.length > 1000,
      'this will succeed and find > 1000 allocation creation events',
    )
    console.table(data.allocationCreatedEvents)
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
