import { Link } from "react-router-dom";
import type { INavItem } from "../features/types/types";

const navItems: INavItem[] = [
  { id: 1, title: "Головна", path: "/" },
  { id: 2, title: "Акції", path: "/sale" },
  { id: 3, title: "Корзина", path: "/cart" },
];
  
export default function Footer() {
  
  return (
    <footer className="bg-[#4a0d0b]">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 h-100 pt-20 px-15 m-auto">
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="text-lg text-white pt-4 hover:text-[#d9a851]"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </section>
    </footer>
  );
}
