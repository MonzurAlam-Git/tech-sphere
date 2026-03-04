import { useContext } from "react";
import { CartContext } from "../../../Context/context";

export default function Summary() {
  const { cartData } = useContext(CartContext);

  const totalCost = () => {
    let total = 0;

    cartData?.data.map((item) => {
      const subTotal = item.quantity * item.product.price;
      total = total + subTotal;
    });

    return total;
  };

  const cost = totalCost();

  return (
    <div className="space-y-3 border-slate-200">
      <div className="flex justify-between text-slate-600">
        <span>Subtotal</span>
        <span>${cost}</span>
      </div>
      <div className="flex justify-between text-slate-600">
        <span>Shipping</span>
        <span className="text-emerald-600 font-semibold">Free</span>
      </div>
      <div className="flex justify-between text-slate-600">
        <span>Tax</span>
        <span>$0</span>
      </div>
      <div className="flex justify-between text-xl font-bold pt-3 text-slate-900">
        <span>Total</span>
        <span>${cost}</span>
      </div>
    </div>
  );
}
