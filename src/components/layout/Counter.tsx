
  interface ICounterProps {
    quantity: number,
    minusQuantity: () => void;
    addQuantity: () => void;
  }

export default function Counter({ quantity, minusQuantity, addQuantity }: ICounterProps) {
  return (
    <div className="flex">
      <button
        className="bg-primery text-center text-white w-6 rounded-md font-bold cursor-pointer hover:bg-accent"
        onClick={minusQuantity}
      >
        -
      </button>
      <div className="w-7 text-center text-sm">{quantity}</div>
      <button
        className="bg-primery text-center text-white w-6 rounded-md font-bold cursor-pointer hover:bg-accent"
        onClick={addQuantity}
      >
        +
      </button>
    </div>
  );
}
