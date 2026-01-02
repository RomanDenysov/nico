import Link from "next/link";
import { getMenuTypes } from "@/db/queries";

export async function MenuTypesList() {
  const menuTypes = await getMenuTypes();
  return (
    <aside>
      <nav>
        <ul>
          {menuTypes.map((item) => (
            <li key={`${item.slug}-${item.id}`}>
              <Link href={`/admin/menu?type=${item.slug}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
