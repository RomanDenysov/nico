import type { getMenuCategories } from "./queries";

export type Category = Awaited<ReturnType<typeof getMenuCategories>>[number];
