import { useState } from "react";
import { CartContext } from "../Context/context";
import useProductData from "../Hooks/useProductsData";

export default function CartProvider({ children }) {
  const { productsData: cartData, setProductsData: setcartData } =
    useProductData("cart");

  const [showCart, setshowCart] = useState(false);

  const toggleCart = async (product, quantity = 1) => {
    try {
      // Check if product already exists in cart
      const cartItem = cartData.data.find(
        (item) => item.productId === product.id,
      );

      if (cartItem) {
        // Product exists → DELETE it
        const response = await fetch(
          `http://localhost:9000/cart/${cartItem.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (response.ok) {
          // Remove from local state
          setcartData((prev) => ({
            ...prev,
            data: prev.data.filter((item) => item.id !== cartItem.id),
          }));
        }
      } else {
        // Product doesn't exist → ADD it (your existing code)
        const response = await fetch("http://localhost:9000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product.id,
            quantity: quantity,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setcartData((prev) => ({
            ...prev,
            data: [...prev.data, result.data],
          }));
        }
      }
    } catch (error) {
      console.error("Error toggling cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        setcartData,
        toggleCart,
        showCart,
        setshowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
