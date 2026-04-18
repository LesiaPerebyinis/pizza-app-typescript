

interface ISearchInput {
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteValue: () => void;
  value: string;
}

export default function SearchInput({ value, deleteValue, handleValue }: ISearchInput) {
  return (
    <div className="relative max-w-md">
      <input
        value={value}
        onChange={handleValue}
        type="search"
        placeholder="Пошук..."
        className="block w-full p-3 mt-7 mb-7 pl-5ntext-sm text-gray-900 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:[#4a0d0b] focus:border-[#4a0d0b] transition-all"
      />

      {value && (
        <button
          onClick={deleteValue}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-[#4a0d0b]"
        >
          ✕
        </button>
      )}
    </div>
  );
}
