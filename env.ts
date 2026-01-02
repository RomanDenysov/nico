import { config } from "dotenv";
import { expand } from "dotenv-expand";

import { z } from "zod";

expand(config());

const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PROJECT_DOMAIN: z.string().min(1).default("presov"),
  DATABASE_URL: z.string().min(1),
  ADMIN_PASSWORD: z.string().min(1),
});

const env = EnvSchema.parse(process.env);

export default env;
