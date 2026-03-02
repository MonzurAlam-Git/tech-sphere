import Summary from "./Summary";

export default function CheckoutForm() {
  return (
    <div className="lg:col-span-1">
      <div className="soft-card p-6 sticky top-24 space-y-6">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

        {/* Summary */}
        <Summary />
      </div>
    </div>
  );
}
