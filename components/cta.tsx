import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

export interface CTAProps {
  title: string
  description?: string
  buttonLabel: string
  href?: string
  onClick?: () => void
}

export function CTA({ title, description, buttonLabel, href, onClick }: CTAProps) {
  return (
    <section
      aria-label="Call to action"
      aria-labelledby="cta-title"
      aria-describedby="cta-description"
      id="cta"
      className="h-screen w-full snap-center px-4 pt-26 pb-20"
    >
      <Card className="relative overflow-hidden h-full min-h-[320px] flex items-center justify-center">
        <CardContent className="flex flex-col items-center text-center gap-4">
          <CardTitle id="cta-title" className="text-4xl md:text-5xl">
            {title}
          </CardTitle>
          {description ? (
            <CardDescription id="cta-description" className="max-w-prose">
              {description}
            </CardDescription>
          ) : null}
          {href ? (
            <Button asChild size="lg" className="mt-2">
              <Link href={href}>{buttonLabel}</Link>
            </Button>
          ) : (
            <Button size="lg" className="mt-2" onClick={onClick}>
              {buttonLabel}
            </Button>
          )}
        </CardContent>
      </Card>
    </section>
  )
}


