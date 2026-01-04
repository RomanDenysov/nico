import "server-only";

export {
  getMenuCategories,
  getMenuCategory,
  getMenuCategoryById,
  reorderMenuCategories,
} from "@/features/categories-sidebar/queries";
export {
  getExtraById,
  getExtras,
  reorderExtras,
} from "@/features/extras/queries";

export {
  getMaxMenuItemOrder,
  getMenuItem,
  getMenuItems,
  reorderMenuItems,
} from "@/features/menu-items/queries";
/**
 * @deprecated This file is kept for backward compatibility.
 * Import queries from feature folders instead:
 * - @/feature/menu-types/queries
 * - @/feature/categories-sidebar/queries
 * - @/feature/menu-items/queries
 * - @/feature/extras/queries
 */
export {
  getMenuType,
  getMenuTypeById,
  getMenuTypes,
  reorderMenuTypes,
} from "@/features/menu-types/queries";
