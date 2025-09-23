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

// Regex patterns must be top-level for performance
const SUMMER_PATTERNS: RegExp[] = [
  /letn/i,
  /iced|ice|cold/i,
  /affogato/i,
  /tonic/i,
  /filter\s*na\s*ľade|lade/i,
  /dirty\s*espresso/i,
  /grep\s*espresso/i,
  /kiwi|baza|jahod|čučoried|strawberry|salted\s*caramel/i,
  /frapp|matcha\s*tonic|mango\s*espresso/i,
];

const BREAKFAST_PATTERNS: RegExp[] = [
  /raňaj/i,
  /omelet/i,
  /croissant/i,
  /smoothie/i,
  /blackstone/i,
  /toast/i,
  /palacink|french\s*toast/i,
  /\beggs?\b|egg/i,
  /praženic/i,
  /ham\s*&?\s*eggs/i,
  /avotoast/i,
  /granola|ovsena|ovsená|kaša|kasa/i,
  /lievanc/i,
  /shokupan/i,
];

const DRINK_PATTERNS: RegExp[] = [
  /espresso|cappuccino|cortado|latt[eé]|latte|macchiat|flat\s*white|batch\s*brew|v60|french\s*press|chai|matcha|čokol|kakao|babyccino/i,
  /čaj|tea|earl|sencha|rooibos|harmanček|jazmín|jasmine/i,
  /džús|juice|voda|rajec|pellegrino|cola|tonica|mat[eé]|pomaranč|grep/i,
  /aperol|hugo|mimosa|gin|negroni|nochino|ruby|prosecco|tonic/i,
  /bernard|pivo/i,
  /varadys|absolut|jameson|jack\s*daniels|beefeat|morgan|diplom|baileys|becher|jäger|tatransk/i,
  /nichta|kaschauer|carl\s*jung/i,
];

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

function dedupeKeepBest(items: RawMenuItem[]): RawMenuItem[] {
  const seen = new Map<string, RawMenuItem>();
  for (const item of items) {
    const key = item.name.trim();
    const current = seen.get(key);
    if (!current) {
      seen.set(key, item);
      continue;
    }
    const preferImage = (a?: string, b?: string) => (a?.length ? a : (b ?? ""));
    const preferText = (a?: string, b?: string) => (a?.length ? a : (b ?? ""));
    seen.set(key, {
      name: key,
      price: preferText(item.price, current.price),
      description: preferText(item.description, current.description),
      image: preferImage(item.image, current.image),
    });
  }
  return Array.from(seen.values());
}

const isMatch = (name: string, patterns: RegExp[]) =>
  patterns.some((re) => re.test(name));

export function parseMenuCategories(json: MenuJson): Category[] {
  const all: RawMenuItem[] =
    json.restaurant?.categories?.flatMap((c) => c.items ?? []) ?? [];

  const items = dedupeKeepBest(all);

  const summer: ParsedCategoryItem[] = [];
  const breakfast: ParsedCategoryItem[] = [];
  const bistro: ParsedCategoryItem[] = [];
  const drinks: ParsedCategoryItem[] = [];

  for (const item of items) {
    const name = item.name ?? "";
    const normalized: ParsedCategoryItem = {
      name,
      price: normalizePrice(item.price),
      description: item.description?.trim() || undefined,
    };

    if (isMatch(name, SUMMER_PATTERNS)) {
      summer.push(normalized);
      continue;
    }
    if (isMatch(name, BREAKFAST_PATTERNS)) {
      breakfast.push(normalized);
      continue;
    }
    if (isMatch(name, DRINK_PATTERNS)) {
      drinks.push(normalized);
      continue;
    }
    bistro.push(normalized);
  }

  const toCategory = (
    id: string,
    title: string,
    list: ParsedCategoryItem[]
  ): Category => ({
    id,
    title,
    items: list.sort((a, b) => a.name.localeCompare(b.name, "sk")),
  });

  return [
    toCategory("summer", "Letné menu (sezónne)", summer),
    toCategory("breakfast", "Raňajkové menu", breakfast),
    toCategory("bistro", "Bistro menu", bistro),
    toCategory("drinks", "Nápojový lístok", drinks),
  ].filter((c) => c.items.length > 0);
}

export const categories: Category[] = parseMenuCategories(menuJson as MenuJson);
