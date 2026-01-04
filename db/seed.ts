import db from "./index";
import {
  extras,
  menuCategories,
  menuItems,
  menuTypes,
  type NewExtra,
  type NewMenuCategory,
  type NewMenuItem,
  type NewMenuType,
} from "./schema";
import { bistroMenu, breakfastMenu, extras as extrasData } from "./seed-data";

/**
 * Menu configuration that maps menu types to their categories
 * Each category has a name, slug, and reference to the data source
 */
const menuConfig = {
  ranajky: {
    name: "Raňajky",
    slug: "ranajky",
    image: "/images/breakfast.jpg",
    categories: [
      { name: "Menu", slug: "menu", isComboMenu: true },
      { name: "Hlavné", slug: "main" },
      { name: "Prílohy", slug: "sides" },
      { name: "Druhé", slug: "seconds" },
    ],
    data: breakfastMenu,
  },
  bistro: {
    name: "Bistro",
    slug: "bistro",
    image: "/images/bistro.jpg",
    categories: [
      { name: "Menu", slug: "menu", isComboMenu: true },
      { name: "Polievky", slug: "soups" },
      { name: "Bowls", slug: "bowls" },
      { name: "Pan Asia", slug: "pan-asia", dataKey: "panAsia" },
      { name: "Klasiky", slug: "classics" },
      { name: "Sladkosti", slug: "sweets" },
      { name: "Street Food", slug: "street-food", dataKey: "streetFood" },
    ],
    data: bistroMenu,
  },
} as const;

interface CategoryConfig {
  name: string;
  slug: string;
  isComboMenu?: boolean;
  dataKey?: string;
}

interface MenuItemData {
  name: string;
  description?: string;
  price: string;
}

interface MenuData {
  [key: string]: MenuItemData[];
}

/**
 * Generates category slug that's unique per menu type
 * Format: {typeSlug}-{categorySlug}
 */
function generateCategorySlug(typeSlug: string, categorySlug: string): string {
  return `${typeSlug}-${categorySlug}`;
}

/**
 * Gets menu items from data source based on category slug or dataKey
 */
function getMenuItemsFromData(
  data: MenuData,
  category: CategoryConfig
): Array<{ name: string; description?: string; price: string }> {
  const key = category.dataKey ?? category.slug;
  return data[key] ?? [];
}

async function seedMenuType(
  typeConfig: (typeof menuConfig)[keyof typeof menuConfig],
  typeOrder: number
): Promise<void> {
  // Insert menu type
  const [insertedType] = await db
    .insert(menuTypes)
    .values({
      name: typeConfig.name,
      slug: typeConfig.slug,
      image: typeConfig.image,
      order: typeOrder,
    } satisfies NewMenuType)
    .returning();

  console.log(`📋 Created menu type: ${insertedType.name}`);

  // Insert categories and collect their IDs
  const categoryMap = new Map<string, number>();

  const categoriesToInsert: NewMenuCategory[] = typeConfig.categories.map(
    (cat, index) => ({
      name: cat.name,
      slug: generateCategorySlug(typeConfig.slug, cat.slug),
      description:
        cat.slug === "menu"
          ? typeConfig.data.menu.at(0)?.description
          : undefined,
      order: index + 1,
      typeId: insertedType.id,
    })
  );

  const insertedCategories = await db
    .insert(menuCategories)
    .values(categoriesToInsert)
    .returning();

  for (const cat of insertedCategories) {
    // Extract the original category slug from the full slug
    const originalSlug = cat.slug.replace(`${typeConfig.slug}-`, "");
    categoryMap.set(originalSlug, cat.id);
  }

  console.log(
    `📂 Created ${insertedCategories.length} categories for ${typeConfig.name}`
  );

  // Insert menu items for each category
  const allMenuItems: NewMenuItem[] = [];

  for (const category of typeConfig.categories) {
    const categoryId = categoryMap.get(category.slug);
    if (!categoryId) {
      continue;
    }

    const cat = category as CategoryConfig;
    const items = getMenuItemsFromData(
      typeConfig.data as unknown as MenuData,
      cat
    );

    for (const [index, item] of items.entries()) {
      allMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId,
        order: index + 1,
        isComboMenu: cat.isComboMenu ?? false,
      });
    }
  }

  if (allMenuItems.length > 0) {
    await db.insert(menuItems).values(allMenuItems);
    console.log(
      `🍽️ Created ${allMenuItems.length} menu items for ${typeConfig.name}`
    );
  }
}

async function seedExtras(): Promise<void> {
  const extrasToInsert: NewExtra[] = extrasData.map((extra, index) => ({
    name: extra.name,
    price: extra.price,
    order: index + 1,
  }));

  await db.insert(extras).values(extrasToInsert);
  console.log(`➕ Created ${extrasToInsert.length} extras`);
}

async function clearDatabase(): Promise<void> {
  console.log("🧹 Clearing existing data...");
  // Delete in reverse order of dependencies
  await db.delete(menuItems);
  await db.delete(menuCategories);
  await db.delete(menuTypes);
  await db.delete(extras);
}

async function main(): Promise<void> {
  console.log("🌱 Starting database seed...\n");

  await clearDatabase();

  // Seed menu types with their categories and items
  let typeOrder = 1;
  for (const typeConfig of Object.values(menuConfig)) {
    await seedMenuType(typeConfig, typeOrder);
    typeOrder += 1;
    console.log("");
  }

  // Seed extras
  await seedExtras();

  console.log("\n✨ Database seed completed successfully!");
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error: unknown) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  });
