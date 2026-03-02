import ProductsGrid from "./ProductsGrid/ProductsGrid";
import SidebarFilters from "./SidebarFilters/SidebarFilters";

export default function ProductCatalog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar Filters */}
      <SidebarFilters />

      {/* Products Grid */}
      <ProductsGrid />
    </div>
  );
}
