

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
        className="block w-full p-3 my-7 text-sm text-gray-900 rounded-xl outline-none ring ring-dark bg-white focus:ring-2"
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
