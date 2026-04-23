

interface ISearchInput {
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteValue: () => void;
  value: string;
}

export default function SearchInput({ value, deleteValue, handleValue }: ISearchInput) {
  return (
    <div className="relative max-w-md my-7">
      <label htmlFor="search-input"></label>
      <input
        id="search-input"
        value={value}
        onChange={handleValue}
        type="search"
        placeholder="Пошук..."
        className="border border-dark rounded-md p-3 block w-full text-sm text-gray-900 focus:outline-none focus:ring-1 focus:border-2 focus:border-accent transition-all"
      
      />

      {value && (
        <button
          onClick={deleteValue}
          className="absolute right-3 top-2.5 text-gray-900 hover:text-dark cursor-pointer"
        >
          ✕
        </button>
      )}
    </div>
  );
}
