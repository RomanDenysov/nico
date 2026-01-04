import type { getExtras } from "./queries";

export type Extra = Awaited<ReturnType<typeof getExtras>>[number];
