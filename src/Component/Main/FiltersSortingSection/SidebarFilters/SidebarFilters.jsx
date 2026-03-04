import { useContext, useState } from "react";
import { ProductContext } from "../../../../Context/context";

const categoryOptions = ["Apple Mac Pro", "Gaming Laptop", "Workstation"];
const priceRanges = [
  { label: "$0 - $2000", min: 0, max: 2000 },
  { label: "$2000 - $5000", min: 2000, max: 5000 },
  { label: "$5000+", min: 5000, max: null },
];
const ratingOptions = [
  { label: "4.5 Star & up", value: 4.5 },
  { label: "4.0 Star & up", value: 4.0 },
  { label: "3.5 Star & up", value: 3.5 },
];

export default function SidebarFilters() {
  const { handleFilter } = useContext(ProductContext);
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
  });

  const handleFilterChange = (e) => {
    const { name, value, checked, dataset } = e.target;

    let newFilters = { ...selectedFilters };

    if (name === "category") {
      newFilters.category = checked ? value : "";
    } else if (name === "price") {
      newFilters.minPrice = checked ? Number(dataset.min) : "";
      newFilters.maxPrice = checked
        ? dataset.max !== "null"
          ? Number(dataset.max)
          : null
        : "";
    } else if (name === "minRating") {
      newFilters.minRating = checked ? Number(value) : "";
    }

    setSelectedFilters(newFilters);
    handleFilter(newFilters);
  };

  const handleClearFilters = () => {
    const cleared = { category: "", minPrice: "", maxPrice: "", minRating: "" };
    setSelectedFilters(cleared);
    handleFilter(cleared);
  };

  return (
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            onClick={handleClearFilters}
            className="text-xs text-rose-500 font-semibold hover:text-rose-600"
          >
            Clear
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
          <div className="space-y-2">
            {categoryOptions.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  checked={selectedFilters.category === category}
                  onChange={handleFilterChange}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span className="ml-3 text-sm text-slate-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">
            Price Range
          </h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label
                key={range.label}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="price"
                  data-min={range.min}
                  data-max={range.max}
                  checked={
                    selectedFilters.minPrice === range.min &&
                    selectedFilters.maxPrice === range.max
                  }
                  onChange={handleFilterChange}
                  className="w-4 h-4 text-rose-500"
                />
                <span className="ml-3 text-sm text-slate-700">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
          <div className="space-y-2">
            {ratingOptions.map((rating) => (
              <label
                key={rating.value}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="minRating"
                  value={rating.value}
                  checked={selectedFilters.minRating === rating.value}
                  onChange={handleFilterChange}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span className="ml-3 text-sm text-slate-700">
                  {rating.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
