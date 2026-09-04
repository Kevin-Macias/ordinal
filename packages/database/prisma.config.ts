import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Client generation does not need a live database. Runtime and migration
    // commands should provide DATABASE_URL; this fallback is local-only.
    url:
      process.env.DATABASE_URL ??
      'postgresql://ordinal:ordinal@localhost:5432/ordinal?schema=public',
  },
})
