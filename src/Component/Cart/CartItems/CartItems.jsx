import CartItem from "./CartItem";

export default function CartItems() {
  return (
    <div className="lg:col-span-2">
      <div className="space-y-4">
        {/* Cart Item 1 */}
        <CartItem />
      </div>
    </div>
  );
}
