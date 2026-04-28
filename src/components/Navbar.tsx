import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import type { INavItem } from "../features/types/types";
import CartButton from "./layout/CartButton";



import Modal from "./Modal";
import { useAppSelector } from "../store/hooks";


const navItems: INavItem[] = [
  { id: 1, title: "Головна", path: "/" },
  { id: 2, title: "Акції", path: "/sale" },
];

export default function Navbar() {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const OpenModal = () => totalQuantity === 0 && setIsModalOpen(true);
  return (
    <header className="fixed top-0 left-0 z-7 w-full h-27  bg-white">
      <nav className="container w-full mx-auto px-4 py-4 sm:px-6 lg:px-8 justify-between items-center flex border-b border-gray-200">
        <div className="flex gap-5 ">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-dark text-white hover:bg-[#765e5d]"
                    : "text-dark hover:bg-gray-100"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        {totalQuantity > 0 ? (
          <Link to="/cart">
            <CartButton OpenModal={OpenModal} />
          </Link>
        ) : (
          <CartButton OpenModal={OpenModal} />
        )}

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-dark text-lg pb-4">Кoшик порожній!</h2>
          <p className="text-dark">
            Щоб зробити замовлення необхідно вибрати піцу, що вам до вподоби!!!
          </p>
        </Modal>
      </nav>
    </header>
  );
}
