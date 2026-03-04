import { useContext } from "react";
import { CartContext } from "../../../Context/context";
import CartItem from "./CartItem";

export default function CartItems() {
  const { cartData } = useContext(CartContext);

  return (
    <div className="lg:col-span-2">
      <div className="space-y-4">
        {cartData.length === 0
          ? "Cart Empty"
          : cartData.data.map((item) => {
              return <CartItem key={item.id} cartItem={item} />;
            })}
      </div>
    </div>
  );
}
