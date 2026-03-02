import { useContext } from "react";
import { ProductContext } from "../../../../Context/context";
import LoadingSkeletonCard from "./LoadingSkeletonCard";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const { productsData, loading } = useContext(ProductContext);

  if (loading.state) {
    // show as many skeletons as you like
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: productsData.data.length }, (_, i) => (
          <LoadingSkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productsData.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
