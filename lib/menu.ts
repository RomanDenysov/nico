import menuJson from "@/data/menu.json" with { type: "json" };

export type RawMenuItem = {
  name: string;
  price?: string;
  description?: string;
  image?: string;
};

export type ParsedCategoryItem = {
  name: string;
  price?: string;
  description?: string;
};

export type Category = {
  id: string;
  title: string;
  items: ParsedCategoryItem[];
};

export type MenuJson = {
  restaurant?: {
    categories?: Array<{
      name: string;
      items?: RawMenuItem[];
    }>;
  };
};

// Helper function to create URL-friendly IDs from category names
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

function normalizePrice(price?: string): string | undefined {
  if (!price) {
    return;
  }
  const numbers = price.match(/\d+(?:[.,]\d+)?/g);
  if (!numbers) {
    return price;
  }
  const formatted = numbers.map((n) => {
    const value = Number.parseFloat(n.replace(",", "."));
    return Number.isFinite(value) ? value.toFixed(2) : n;
  });
  return formatted.join(" / ");
}

export function parseMenuCategories(json: MenuJson): Category[] {
  const rawCategories = json.restaurant?.categories ?? [];

  return rawCategories
    .map((category) => {
      const items: ParsedCategoryItem[] = (category.items ?? []).map(
        (item) => ({
          name: item.name,
          price: normalizePrice(item.price),
          description: item.description?.trim() || undefined,
        })
      );

      return {
        id: slugify(category.name),
        title: category.name,
        items,
      };
    })
    .filter((category) => category.items.length > 0);
}

export const categories: Category[] = parseMenuCategories(menuJson as MenuJson);
