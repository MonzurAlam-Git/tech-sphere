import { useContext } from "react";
import { ProductContext } from "../../../../Context/context";

export default function SortingOptions() {
  const { productsData } = useContext(ProductContext);

  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-slate-600">
        Showing {productsData.data.length} products
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium text-slate-700">
          Sort by:
        </label>
        <select
          id="sort"
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
