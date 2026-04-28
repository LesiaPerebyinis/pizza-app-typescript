import { useEffect, useState } from "react";
import PizaCard from "./PizzaCard";
import { fetchPizzas } from "../api/getPizzas";
import type { IPizza } from "../features/types/types";
import PizzaSkeleton from "./PizzaSkeleton";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import SearchInput from "./ui/SearchInput";

export default function PizaList() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPizzas();
        setPizzas(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);
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
        {isLoading
          ? [...new Array(8)].map((_, i) => <PizzaSkeleton key={i} />)
          : pizzas
              .filter((pizaItem) =>
                (["title", "ingredient"] as const).some((key) =>
                  pizaItem[key].toLowerCase().includes(value.toLowerCase()),
                ),
              )
              .map((pizaItem) => (
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
