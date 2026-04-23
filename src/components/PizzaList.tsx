import { useState } from "react";
import PizaCard from "./PizzaCard";
import { PIZAS_DATA } from "../lib/data";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import SearchInput from "./SearchInput";

export default function PizaList() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchInput
        value={value}
        deleteValue={() => setValue("")}
        handleValue={handleValue}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-dark">
        {PIZAS_DATA.filter((pizaItem) =>
          (["title", "ingredient"] as const).some((key) => pizaItem[key].toLowerCase().includes(value.toLowerCase()),
          ),
        ).map((pizaItem) => (
          <PizaCard
            key={pizaItem.id}
            {...pizaItem}
            product={pizaItem}
            addPizaToCart={(pizaItem) => dispatch(addToCart(pizaItem))}
          />
        ))}
      </div>
    </>
  );
}
