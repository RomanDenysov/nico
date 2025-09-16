import Link from "next/link"

export interface SiteFooterProps {
  email?: string
  phone?: string
  address?: string
  socials?: { label: string; href: string }[]
}

export function SiteFooter({ email, phone, address, socials = [] }: SiteFooterProps) {
  return (
    <footer aria-label="Footer" className="h-screen w-full snap-center px-4 pt-26 pb-20 mt-0 border-t">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Kontakt</h3>
          {address ? <p className="text-sm text-muted-foreground">{address}</p> : null}
          {email ? (
            <p className="text-sm"><Link href={`mailto:${email}`} className="hover:underline">{email}</Link></p>
          ) : null}
          {phone ? (
            <p className="text-sm"><Link href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:underline">{phone}</Link></p>
          ) : null}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Odkazy</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li><Link href="#hero" className="hover:underline">Úvod</Link></li>
            <li><Link href="#menu" className="hover:underline">Menu</Link></li>
            <li><Link href="#cta" className="hover:underline">Rezervace</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Sledujte nás</h3>
          <ul className="flex items-center gap-3 text-sm">
            {socials.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:underline">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nico. Všechna práva vyhrazena.
      </div>
    </footer>
  )
}


