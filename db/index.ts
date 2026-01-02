import { drizzle } from "drizzle-orm/neon-http";
// biome-ignore lint/performance/noNamespaceImport: IGNORE IT OR DO IN DIFFERENT WAY
import * as schema from "./schema";

// biome-ignore lint/style/noNonNullAssertion: TODO: Implement ENV check with ZOD
const db = drizzle(process.env.DATABASE_URL!, { schema });

export default db;
