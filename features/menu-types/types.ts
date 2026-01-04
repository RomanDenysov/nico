import type { getMenuTypes } from "./queries";

export type MenuType = Awaited<ReturnType<typeof getMenuTypes>>[number];
