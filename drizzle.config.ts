import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';

const filters = [`${process.env.PROJECT_DOMAIN!}`];

export default defineConfig({
  out: './db/migrations',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
tablesFilter: filters,
});
