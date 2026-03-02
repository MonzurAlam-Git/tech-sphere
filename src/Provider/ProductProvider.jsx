import { ProductContext } from "../Context/context";
import useProductData from "../Hooks/useProductsData";

export default function ProductProvider({ children }) {
  const { productsData, loading, error } = useProductData("products");

  return (
    <ProductContext.Provider value={{ productsData, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
