import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '../generated/client/client.js'

export { PrismaClient } from '../generated/client/client.js'

export function createDatabaseClient(connectionString: string): PrismaClient {
  const adapter = new PrismaPg({ connectionString })
  return new PrismaClient({ adapter })
}
