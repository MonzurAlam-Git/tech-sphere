export default function CartItem({ cartItem }) {
  return (
    <div className="soft-card p-4 flex gap-4">
      {/* Product Image */}
      <img
        src={`http://localhost:9000/${cartItem.image}`}
        alt={cartItem.title}
        className="w-24 h-24 object-cover rounded-lg bg-slate-100"
      />

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        {/* Title and Remove Button */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-lg text-slate-900">
              {cartItem.title}
            </h3>
            <p className="text-slate-500 text-sm">
              SKU: {cartItem.category.toUpperCase().replace(/\s+/g, "-")}-
              {cartItem.id} - {cartItem.category}
            </p>
          </div>
          <button
            className="text-slate-400 hover:text-rose-500"
            aria-label="Remove"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Quantity and Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
              -
            </button>
            <span className="text-sm font-semibold">
              {cartItem.quantity || 1}
            </span>
            <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
              +
            </button>
          </div>
          <span className="text-2xl font-bold text-slate-900">
            ${cartItem.price}
          </span>
        </div>
      </div>
    </div>
  );
}
