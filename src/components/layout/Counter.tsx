
  interface ICounterProps {
    quantity: number,
    minusQuantity: () => void;
    addQuantity: () => void;
  }

export default function Counter({ quantity, minusQuantity, addQuantity }: ICounterProps) {
  return (
    <div className="flex">
      <button
        className="bg-[#d9a851] text-center text-white w-6 rounded-md font-bold cursor-pointer hover:bg-[#b66d3e]"
        onClick={minusQuantity}
      >
        -
      </button>
      <div className="w-7 text-center text-sm">{quantity}</div>
      <button
        className="bg-[#d9a851] text-center text-white w-6 rounded-md font-bold cursor-pointer hover:bg-[#b66d3e]"
        onClick={addQuantity}
      >
        +
      </button>
    </div>
  );
}
