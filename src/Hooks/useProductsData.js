import { useEffect, useState } from "react";

const useProductData = (base) => {
  const [baseData, setBaseData] = useState({
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
      const res = await fetch(`http://localhost:9000/${base}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const newData = await res.json();

      //   const updatedProducts = [...productsData, newData];
      setBaseData(newData);
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
    baseData,
    setBaseData,
    loading,
    error,
  };
};

export default useProductData;
