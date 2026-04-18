interface ITableCart {
  title: string,
  cost: string | number,
  deleteItem: string,
  quantity: string | number,
  total: string
}

export default function TableCart({title, cost, quantity, deleteItem, total }: ITableCart) {
  return (
    <div className="w-full flex items-center gap-1 text-white text-xs lg:text-sm  font-bold bg-[#d9a851] h-15">
      <div className="w-2/10 text-center">{total}</div>
      <div className="w-3/10 text-center border-r border-l">
        <h3>{title}</h3>
      </div>
      <div className="w-2/10 text-center border-r">{quantity}</div>
      <div className="w-2/10 text-center border-r">{cost}</div>
      <div className="w-1/10 text-center hidden md:block">{deleteItem}</div>
    </div>
  );
}
