import { integer, pgTableCreator, serial, text, timestamp } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `${process.env.PROJECT_DOMAIN!}_${name}`);

export const menuCategories = pgTable('menu_categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  order: integer('order').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
});

export const menuItems = pgTable('menu_items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  price: text('price').notNull(),
  categoryId: integer('category_id').references(() => menuCategories.id),
  order: integer('order').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
});

