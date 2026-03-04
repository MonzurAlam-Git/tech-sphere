import { useContext, useState } from "react";
import { CartContext } from "../../../Context/context";

export default function CartItem({ cartItem }) {
  const { toggleCart, setcartData } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(
    cartItem.quantity || 1,
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const { product } = cartItem;
  const totalPrice = (product.price * productQuantity).toFixed(2);
  const isMaxQuantity = productQuantity === product.stock;
  const isMinQuantity = productQuantity === 1;

  const handleQuantity = async (operation) => {
    let newQuantity = productQuantity;

    if (operation === "add" && !isMaxQuantity) {
      newQuantity = productQuantity + 1;
    } else if (operation === "remove" && !isMinQuantity) {
      newQuantity = productQuantity - 1;
    } else {
      return;
    }

    setIsUpdating(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:9000/cart/${cartItem.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product.id,
            quantity: newQuantity,
          }),
        },
      );

      if (response.ok) {
        const result = await response.json();
        // Update local state
        setProductQuantity(newQuantity);

        // Update cart context
        setcartData((prev) => ({
          ...prev,
          data: prev.data.map((item) =>
            item.id === cartItem.id ? result.data : item,
          ),
        }));
      } else {
        setError("Failed to update quantity");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
      setError("Error updating quantity");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleRemoveItem = () => {
    toggleCart(product);
  };

  return (
    <div className="soft-card p-5 flex gap-5 hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={`http://localhost:9000/${product.image}`}
          alt={product.title}
          className="w-28 h-28 object-cover rounded-lg bg-slate-100 shadow-sm"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="min-w-0">
            <h3 className="font-semibold text-lg text-slate-900 line-clamp-2 hover:text-rose-600 transition-colors cursor-pointer">
              {product.title}
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              SKU: {product.category.toUpperCase().replace(/\s+/g, "-")}-
              {product.id}
            </p>
            <p className="text-slate-400 text-xs mt-1">{product.category}</p>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemoveItem}
            className="flex-shrink-0 text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all"
            aria-label="Remove item"
            title="Remove from cart"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-amber-500 text-sm font-semibold">
              ★ {product.rating_rate}
            </span>
            <span className="text-slate-400 text-xs">
              ({product.rating_count} reviews)
            </span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded mb-2">
            {error}
          </div>
        )}

        {/* Quantity and Price */}
        <div className="flex items-center justify-between">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1">
            <button
              disabled={isMinQuantity || isUpdating}
              onClick={() => handleQuantity("remove")}
              className={`h-9 w-9 rounded-md flex items-center justify-center font-semibold transition-all ${
                isMinQuantity || isUpdating
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-white hover:text-rose-500 hover:shadow-sm"
              }`}
            >
              −
            </button>

            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-sm font-bold text-slate-900">
                {productQuantity}
              </span>
              <span className="text-xs text-slate-500">/ {product.stock}</span>
            </div>

            <button
              disabled={isMaxQuantity || isUpdating}
              onClick={() => handleQuantity("add")}
              className={`h-9 w-9 rounded-md flex items-center justify-center font-semibold transition-all ${
                isMaxQuantity || isUpdating
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-white hover:text-rose-500 hover:shadow-sm"
              }`}
            >
              +
            </button>
          </div>

          {/* Status and Price */}
          <div className="flex flex-col items-end gap-1">
            {product.stock === 0 ? (
              <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                Out of Stock
              </span>
            ) : isMaxQuantity ? (
              <span className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-lg">
                Max reached
              </span>
            ) : (
              <span className="text-xs text-slate-500">
                ${product.price} each
              </span>
            )}

            <span className="text-2xl font-bold text-slate-900">
              ${totalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
