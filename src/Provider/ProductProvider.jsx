import { useState } from "react";
import { ProductContext } from "../Context/context";
import useProductData from "../Hooks/useProductsData";

export default function ProductProvider({ children }) {
  const { productsData, setProductsData, loading, error, setLoading } =
    useProductData("products");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
  });

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setFilteredProducts(null);
      return;
    }

    try {
      const response = await fetch(
        `/products/search?q=${encodeURIComponent(query)}`,
      );
      const data = await response.json();

      if (data.success) {
        setFilteredProducts(data.data);
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleFilter = async (filterValues) => {
    setFilters(filterValues);
    setLoading({ state: true, message: "Filtering products" });

    try {
      const params = new URLSearchParams();

      if (filterValues.category)
        params.append("category", filterValues.category);
      if (filterValues.minPrice)
        params.append("minPrice", filterValues.minPrice);
      if (filterValues.maxPrice)
        params.append("maxPrice", filterValues.maxPrice);
      if (filterValues.minRating)
        params.append("minRating", filterValues.minRating);

      const response = await fetch(
        `http://localhost:9000/products/?${params.toString()}`,
      );
      const data = await response.json();

      if (data.success) {
        setFilteredProducts(data.data);
      }
    } catch (error) {
      console.error("Filter error:", error);
    } finally {
      setLoading({ state: false, message: "Products filtered" });
    }
  };

  const handleSort = (sortValue) => {
    const sorted = [...productsData.data].sort((a, b) => {
      if (sortValue === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortValue === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortValue === "price_asc") return a.price - b.price;
      if (sortValue === "price_desc") return b.price - a.price;
      return 0;
    });

    setProductsData((prev) => ({ ...prev, data: sorted }));
  };

  const displayData =
    filteredProducts !== null ? filteredProducts : productsData.data;

  return (
    <ProductContext.Provider
      value={{
        productsData: { ...productsData, data: displayData },
        loading,
        error,
        setLoading,
        handleSearch,
        handleFilter,
        handleSort,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
