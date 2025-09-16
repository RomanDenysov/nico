"use client"

import { useMemo } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export interface MenuItem {
  name: string
  price?: string | number
  description?: string
}

export interface MenuCategory {
  id: string
  title: string
  items: MenuItem[]
}

export interface MenuSectionProps {
  title?: string
  categories: MenuCategory[]
}

export function MenuSection({ title = "Naše Menu", categories }: MenuSectionProps) {
  const defaultValue = useMemo(() => (categories[0] ? categories[0].id : undefined), [categories])

  return (
    <section aria-label="Menu" id="menu" className="h-screen w-full snap-center px-4 pt-26 pb-20">
      {title ? (
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h2>
      ) : null}
      <Accordion type="single" collapsible defaultValue={defaultValue} className="w-full divide-y rounded-xl border">
        {categories.map((category) => (
          <AccordionItem key={category.id} value={category.id} className="px-4">
            <AccordionTrigger className="text-base">
              <span>{category.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-3">
                {category.items.map((item) => (
                  <li key={`${category.id}-${item.name}`} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.description ? (
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      ) : null}
                    </div>
                    {item.price !== undefined ? (
                      <span className="tabular-nums font-semibold">{String(item.price)}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}


