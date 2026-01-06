CREATE TABLE "presov_extras" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" text NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "presov_menu_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"order" integer NOT NULL,
	"type_id" integer,
	CONSTRAINT "presov_menu_categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "presov_menu_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"price" text NOT NULL,
	"category_id" integer,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "presov_menu_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"order" integer NOT NULL,
	CONSTRAINT "presov_menu_types_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "presov_menu_categories" ADD CONSTRAINT "presov_menu_categories_type_id_presov_menu_types_id_fk" FOREIGN KEY ("type_id") REFERENCES "public"."presov_menu_types"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "presov_menu_items" ADD CONSTRAINT "presov_menu_items_category_id_presov_menu_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."presov_menu_categories"("id") ON DELETE no action ON UPDATE no action;