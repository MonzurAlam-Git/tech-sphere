import { useEffect, useState } from "react";

const useFetchData = (endpoint) => {
  const [productsData, setProductsData] = useState({
    success: true,
    count: 20,
    data: [],
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(false);

  const fetchProductData = async () => {
    try {
      setLoading({
        state: true,
        message: "Data fetching",
      });
      const res = await fetch(`http://localhost:9000/${endpoint}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const newData = await res.json();

      setProductsData(newData);
      setLoading({ state: false, message: "Products fetched successfully" });
    } catch (error) {
      setError(error.message);
      setLoading({ state: false, message: "Failed to fetch products" });
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return {
    productsData,
    setProductsData,
    loading,
    error,
    setLoading,
  };
};

export default useFetchData;
