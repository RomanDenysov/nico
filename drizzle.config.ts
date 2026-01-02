import "dotenv/config";

import { defineConfig } from "drizzle-kit";

const filters = [
  `${
    // biome-ignore lint/style/noNonNullAssertion: TODO: Implement ENV check with ZOD
    process.env.PROJECT_DOMAIN!
  }`,
];

export default defineConfig({
  out: "./db/migrations",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // biome-ignore lint/style/noNonNullAssertion: TODO: Implement ENV check with ZOD
    url: process.env.DATABASE_URL!,
  },
  tablesFilter: filters,
});
