export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface ExtraItem {
  id: string;
  name: string;
  price: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface RestaurantInfo {
  location: {
    street: string;
    city: string;
    postalCode: string;
    mapUrl: string;
  };
  contact: {
    phone: { label: string; href: string };
    email: { label: string; href: string };
  };
  hours: {
    week: { title: string; hours: string; brunch: string; bistro: string };
    weekend: { title: string; hours: string; brunch: string; bistro: string };
  };
}

export interface AboutItem {
  id: string;
  year: number;
  title: string;
  description: string;
  image: string;
}

// Menu category mappings
export type BistroCategory = 'menu' | 'soups' | 'bowls' | 'panAsia' | 'classics' | 'sweets' | 'streetFood';
export type BreakfastCategory = 'menu' | 'main' | 'sides' | 'seconds';
