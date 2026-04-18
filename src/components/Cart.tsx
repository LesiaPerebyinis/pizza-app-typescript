// import React from 'react'

// import { useAppSelector } from "../store/hooks";
import ItemCart from "./ItemCart";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeFromCart, addQuantity, minusQuantity } from "../store/cartSlice";
import TableCart from "./TableCart";

export default function Cart() {
  const items = useAppSelector((state) => state.cart.items);
  const totalCost = useAppSelector((state) => state.cart.totalCost);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const dispatch = useAppDispatch();
  console.log(items);

  return (
    <section className="flex gap-5 flex-col">
      {totalQuantity === 0 && (
        <h2 className="text-center m-5 text-4xl">Кошик порожній!</h2>
      )}
      {totalQuantity > 0 && (
        <div className="flex flex-col gap-y-5 p-1 lg:p-5 border-1 border-gray-100 my-10">
          <TableCart
            total=""
            title="Найменування"
            cost="Вартість"
            quantity="Кількість"
            deleteItem="Видалити"
          />
          {items.map((item) => (
            <ItemCart
              key={item.id}
              {...item}
              addQuantity={() => dispatch(addQuantity(item))}
              minusQuantity={() => dispatch(minusQuantity(item))}
              deletePiza={() => dispatch(removeFromCart(item.id))}
            />
          ))}
          <TableCart
            title=""
            cost={totalCost}
            quantity={totalQuantity}
            deleteItem=""
            total="Всього"
          />
        </div>
      )}
    </section>
  );
}
