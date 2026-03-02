import { useState } from "react";
import { CartContext } from "../Context/context";
import useProductData from "../Hooks/useProductsData";

export default function CartProvider({ children }) {
  const { baseData, setBaseData } = useProductData("cart");
  console.log("productsData =>", baseData);

  //   const [cartData, setcartData] = useState(productsData);

  const [showCart, setshowCart] = useState(false);

  const toggleCart = (newProduct) => {
    setBaseData((prev) => {
      const exists = prev.data.some((p) => p.id === newProduct.id);
      if (exists) return prev.filter((p) => p.id !== newProduct.id);
      return [...prev, newProduct];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartData: baseData.data || [],
        setcartData: setBaseData,
        toggleCart,
        showCart,
        setshowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
