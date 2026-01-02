import db from "@/db";
import { asc, eq } from "drizzle-orm";
import { extras, menuCategories, menuItems, menuTypes } from "./schema";

export function getMenuTypes() {
    return db.query.menuTypes.findMany({
        orderBy: [asc(menuTypes.order)],
    });
}

export function getMenuType(slug: string) {
    return db.query.menuTypes.findFirst({
        where: eq(menuTypes.slug, slug),
    });
}

export function getMenuCategories(typeId: number) {
    return db.query.menuCategories.findMany({
        where: eq(menuCategories.typeId, typeId),
        orderBy: [asc(menuCategories.order)],
    });
}

export function getMenuCategory(slug: string) {
    return db.query.menuCategories.findFirst({
        where: eq(menuCategories.slug, slug),
    });
}

export function getMenuItems(categoryId: number) {
    return db.query.menuItems.findMany({
        where: eq(menuItems.categoryId, categoryId),
        orderBy: [asc(menuItems.order)],
    });
}

export function getMenuItem(id: number) {
    return db.query.menuItems.findFirst({
        where: eq(menuItems.id, id),
    });
}

export function getExtras() {
    return db.query.extras.findMany({
        orderBy: [asc(extras.order)],
    });
}