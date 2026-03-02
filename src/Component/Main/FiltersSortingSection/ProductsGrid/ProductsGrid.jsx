import ProductsList from "./ProductsList";
import SortingOptions from "./SortingOptions";

export default function ProductsGrid() {
  return (
    <div className="md:col-span-3">
      {/* Sorting Options */}
      <SortingOptions />

      {/* Products Grid */}
      <ProductsList />
    </div>
  );
}
