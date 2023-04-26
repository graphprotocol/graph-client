import { findAndParseConfig } from '@graphql-mesh/cli'
import { getMesh, MeshInstance } from '@graphql-mesh/runtime'
import { promises as fs } from 'fs'
import { join } from 'path'

describe.skip('Auto Pagination Multiple Sources', () => {
  let mesh: MeshInstance
  let config: Awaited<ReturnType<typeof findAndParseConfig>>
  beforeAll(async () => {
    config = await findAndParseConfig({
      dir: join(__dirname, '..'),
      configName: 'graphclient',
      additionalPackagePrefixes: ['@graphprotocol/client-'],
    })
    mesh = await getMesh(config)
  })
  it('should work', async () => {
    const document = await fs.readFile(join(__dirname, '../queries/openAllocation.graphql'), 'utf-8')
    const result = await mesh.execute(document, {
      first: 2500,
      skip: 0,
    })
    expect(result?.data.allocationCreatedEvents.length).toBe(2500)
  })
  afterAll(() => {
    mesh.destroy()
  })
})
