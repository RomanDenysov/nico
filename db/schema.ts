import { integer, pgTableCreator, serial, text } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator(
  (name) => `${process.env.PROJECT_DOMAIN!}_${name}`
);

export const menuTypes = pgTable("menu_types", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  order: integer("order").notNull(),
});

export const menuCategories = pgTable("menu_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  description: text("description"),
  order: integer("order").notNull(),
  typeId: integer("type_id").references(() => menuTypes.id),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: text("price").notNull(),
  categoryId: integer("category_id").references(() => menuCategories.id),
  order: integer("order").notNull(),
});

export const extras = pgTable("extras", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: text("price").notNull(),
  order: integer("order").notNull(),
});

export type MenuType = typeof menuTypes.$inferSelect;
export type NewMenuType = typeof menuTypes.$inferInsert;

export type MenuCategory = typeof menuCategories.$inferSelect;
export type NewMenuCategory = typeof menuCategories.$inferInsert;

export type MenuItem = typeof menuItems.$inferSelect;
export type NewMenuItem = typeof menuItems.$inferInsert;

export type Extra = typeof extras.$inferSelect;
export type NewExtra = typeof extras.$inferInsert;
