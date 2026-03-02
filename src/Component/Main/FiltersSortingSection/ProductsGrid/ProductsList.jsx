import LoadingSkeletonCard from "./LoadingSkeletonCard";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Product Card 1 */}
      <ProductCard />

      {/* Product Card 6 - Loading Skeleton */}
      <LoadingSkeletonCard />
    </div>
  );
}
