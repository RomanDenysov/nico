import { bistroMenu, breakfastMenu, extras as extrasData } from "@/app/config";
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

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing data (in reverse order of dependencies)
  console.log("🧹 Clearing existing data...");
  await db.delete(menuItems);
  await db.delete(menuCategories);
  await db.delete(menuTypes);
  await db.delete(extras);

  // Insert menu types
  console.log("📋 Inserting menu types...");
  const ranajkyType: NewMenuType = {
    name: "Raňajky",
    slug: "ranajky",
    order: 1,
  };
  const bistroType: NewMenuType = {
    name: "Bistro",
    slug: "bistro",
    order: 2,
  };

  const [insertedRanajkyType, insertedBistroType] = await db
    .insert(menuTypes)
    .values([ranajkyType, bistroType])
    .returning();

  console.log(
    `✅ Inserted ${insertedRanajkyType.name} and ${insertedBistroType.name} menu types`
  );

  // Insert menu categories for Raňajky
  console.log("📂 Inserting Raňajky categories...");
  const ranajkyCategories: NewMenuCategory[] = [
    {
      name: "Menu",
      slug: "menu",
      description: breakfastMenu.menu[0]?.description,
      order: 1,
      typeId: insertedRanajkyType.id,
    },
    {
      name: "Hlavné",
      slug: "main",
      description: undefined,
      order: 2,
      typeId: insertedRanajkyType.id,
    },
    {
      name: "Prílohy",
      slug: "sides",
      description: undefined,
      order: 3,
      typeId: insertedRanajkyType.id,
    },
    {
      name: "Druhé",
      slug: "seconds",
      description: undefined,
      order: 4,
      typeId: insertedRanajkyType.id,
    },
  ];

  const insertedRanajkyCategories = await db
    .insert(menuCategories)
    .values(ranajkyCategories)
    .returning();

  console.log(
    `✅ Inserted ${insertedRanajkyCategories.length} Raňajky categories`
  );

  // Insert menu categories for Bistro
  console.log("📂 Inserting Bistro categories...");
  const bistroCategories: NewMenuCategory[] = [
    {
      name: "Menu",
      slug: "menu",
      description: bistroMenu.menu[0]?.description,
      order: 1,
      typeId: insertedBistroType.id,
    },
    {
      name: "Polievky",
      slug: "soups",
      description: undefined,
      order: 2,
      typeId: insertedBistroType.id,
    },
    {
      name: "Bowls",
      slug: "bowls",
      description: undefined,
      order: 3,
      typeId: insertedBistroType.id,
    },
    {
      name: "Pan Asia",
      slug: "pan-asia",
      description: undefined,
      order: 4,
      typeId: insertedBistroType.id,
    },
    {
      name: "Klasiky",
      slug: "classics",
      description: undefined,
      order: 5,
      typeId: insertedBistroType.id,
    },
    {
      name: "Sladkosti",
      slug: "sweets",
      description: undefined,
      order: 6,
      typeId: insertedBistroType.id,
    },
    {
      name: "Street Food",
      slug: "street-food",
      description: undefined,
      order: 7,
      typeId: insertedBistroType.id,
    },
  ];

  const insertedBistroCategories = await db
    .insert(menuCategories)
    .values(bistroCategories)
    .returning();

  console.log(
    `✅ Inserted ${insertedBistroCategories.length} Bistro categories`
  );

  // Create maps of category slugs to IDs for each menu type
  const ranajkyCategoryMap = new Map<string, number>();
  for (const cat of insertedRanajkyCategories) {
    ranajkyCategoryMap.set(cat.slug, cat.id);
  }

  const bistroCategoryMap = new Map<string, number>();
  for (const cat of insertedBistroCategories) {
    bistroCategoryMap.set(cat.slug, cat.id);
  }

  // Insert Raňajky menu items
  console.log("🍽️ Inserting Raňajky menu items...");
  const ranajkyMenuItems: NewMenuItem[] = [];

  // Menu category (combo menu)
  const ranajkyMenuCategoryId = ranajkyCategoryMap.get("menu");
  if (ranajkyMenuCategoryId && breakfastMenu.menu[0]) {
    ranajkyMenuItems.push({
      name: breakfastMenu.menu[0].name,
      description: breakfastMenu.menu[0].description,
      price: breakfastMenu.menu[0].price,
      categoryId: ranajkyMenuCategoryId,
      order: 1,
      isComboMenu: true,
    });
  }

  // Main category
  const mainCategoryId = ranajkyCategoryMap.get("main");
  if (mainCategoryId) {
    breakfastMenu.main.forEach((item, index) => {
      ranajkyMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: mainCategoryId,
        order: index + 1,
      });
    });
  }

  // Sides category
  const sidesCategoryId = ranajkyCategoryMap.get("sides");
  if (sidesCategoryId) {
    breakfastMenu.sides.forEach((item, index) => {
      ranajkyMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: sidesCategoryId,
        order: index + 1,
      });
    });
  }

  // Seconds category
  const secondsCategoryId = ranajkyCategoryMap.get("seconds");
  if (secondsCategoryId) {
    breakfastMenu.seconds.forEach((item, index) => {
      ranajkyMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: secondsCategoryId,
        order: index + 1,
      });
    });
  }

  await db.insert(menuItems).values(ranajkyMenuItems);
  console.log(`✅ Inserted ${ranajkyMenuItems.length} Raňajky menu items`);

  // Insert Bistro menu items
  console.log("🍽️ Inserting Bistro menu items...");
  const bistroMenuItems: NewMenuItem[] = [];

  // Menu category (combo menu)
  const bistroMenuCategoryId = bistroCategoryMap.get("menu");
  if (bistroMenuCategoryId && bistroMenu.menu[0]) {
    bistroMenuItems.push({
      name: bistroMenu.menu[0].name,
      description: bistroMenu.menu[0].description,
      price: bistroMenu.menu[0].price,
      categoryId: bistroMenuCategoryId,
      order: 1,
      isComboMenu: true,
    });
  }

  // Soups category
  const soupsCategoryId = bistroCategoryMap.get("soups");
  if (soupsCategoryId) {
    bistroMenu.soups.forEach((item, index) => {
      bistroMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: soupsCategoryId,
        order: index + 1,
      });
    });
  }

  // Bowls category
  const bowlsCategoryId = bistroCategoryMap.get("bowls");
  if (bowlsCategoryId) {
    bistroMenu.bowls.forEach((item, index) => {
      bistroMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: bowlsCategoryId,
        order: index + 1,
      });
    });
  }

  // Pan Asia category
  const panAsiaCategoryId = bistroCategoryMap.get("pan-asia");
  if (panAsiaCategoryId) {
    bistroMenu.panAsia.forEach((item, index) => {
      bistroMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: panAsiaCategoryId,
        order: index + 1,
      });
    });
  }

  // Classics category
  const classicsCategoryId = bistroCategoryMap.get("classics");
  if (classicsCategoryId) {
    bistroMenu.classics.forEach((item, index) => {
      bistroMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: classicsCategoryId,
        order: index + 1,
      });
    });
  }

  // Sweets category
  const sweetsCategoryId = bistroCategoryMap.get("sweets");
  if (sweetsCategoryId) {
    bistroMenu.sweets.forEach((item, index) => {
      bistroMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: sweetsCategoryId,
        order: index + 1,
      });
    });
  }

  // Street Food category
  const streetFoodCategoryId = bistroCategoryMap.get("street-food");
  if (streetFoodCategoryId) {
    bistroMenu.streetFood.forEach((item, index) => {
      bistroMenuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        categoryId: streetFoodCategoryId,
        order: index + 1,
      });
    });
  }

  await db.insert(menuItems).values(bistroMenuItems);
  console.log(`✅ Inserted ${bistroMenuItems.length} Bistro menu items`);

  // Insert extras
  console.log("➕ Inserting extras...");
  const extrasToInsert: NewExtra[] = extrasData.map((extra, index) => ({
    name: extra.name,
    price: extra.price,
    order: index + 1,
  }));

  await db.insert(extras).values(extrasToInsert);
  console.log(`✅ Inserted ${extrasToInsert.length} extras`);

  console.log("✨ Database seed completed successfully!");
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  });
