"use server";

import menuData from "@/data/menu.json" with { type: "json" };

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCombo = {
  name: string;
  slug: string;
  price: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  items: MenuItem[];
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function getMenuCategories(): Promise<MenuCategory[]> {
  const categories: MenuCategory[] = [];

  // Add menu combos as a category
  if (menuData.restaurant.menuCombos?.items.length > 0) {
    categories.push({
      id: "menu-combos",
      title: "Menu Combos",
      slug: "menu-combos",
      description: "Výhodné kombinácie",
      items: menuData.restaurant.menuCombos.items,
    });
  }

  // Add regular categories
  for (const category of menuData.restaurant.categories) {
    const slug = category.slug || slugify(category.name);
    const id = category.description
      ? `${slug}-${slugify(category.description)}`
      : slug;

    categories.push({
      id,
      title: category.name,
      slug,
      description: category.description,
      items: category.items,
    });
  }

  return await Promise.resolve(categories);
}

export async function getMenuCategoryBySlug(
  slug: string
): Promise<MenuCategory | null> {
  const categories = await getMenuCategories();
  return categories.find((cat) => cat.slug === slug) || null;
}

export async function getMenuCombos(): Promise<MenuCombo[]> {
  return await Promise.resolve(menuData.restaurant.menuCombos?.items || []);
}
