export default function PizzaSkeleton() {
  return (
    <div className="flex flex-col items-center p-2 border border-gray-100 rounded-md shadow-sm animate-pulse">
      <div className="w-full h-52 bg-gray-200 rounded-md mb-4" />
      <div className="h-6 bg-gray-200 rounded w-5/6 mb-10" />
      <div className="w-full bg-gray-100 rounded-md h-10 mb-10" />

      <div className="flex justify-between items-center w-full mt-2">
        <div className="h-8 bg-gray-100 rounded-md w-1/3" />
      </div>
      <div className="h-12 bg-gray-100 w-full" />
      <div className="h-10 bg-gray-200 rounded-md w-full" />
    </div>
  );
}
