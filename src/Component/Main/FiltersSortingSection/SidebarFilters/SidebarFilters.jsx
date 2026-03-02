import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

export default function SidebarFilters() {
  return (
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button className="text-xs text-rose-500 font-semibold">Clear</button>
        </div>

        {/* Category Filter */}
        <CategoryFilter />

        {/* Price Filter */}
        <PriceFilter />

        {/* Rating Filter */}
        <RatingFilter />
      </div>
    </div>
  );
}
