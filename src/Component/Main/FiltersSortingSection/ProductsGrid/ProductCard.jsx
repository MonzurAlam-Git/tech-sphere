import { useContext } from "react";
import { CartContext } from "../../../../Context/context";

export default function ProductCard({ product }) {
  const { cartData, toggleCart } = useContext(CartContext);

  const isInCart = cartData.data.some((item) => item.productId === product.id);

  return (
    <div className="soft-card overflow-hidden hover:-translate-y-1 transition-all">
      <button
        onClick={() => toggleCart(product, 1)}
        className="w-full button-primary py-2.5 rounded-lg font-semibold"
      >
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>

      <div className="aspect-square bg-linear-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
        <img
          src={`http://localhost:9000/${product.image}`}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-slate-900 line-clamp-2">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-amber-500">Star {product.rating_rate}</span>
          <span className="text-slate-500">
            ({product.rating_count} reviews)
          </span>
        </div>

        <p className="text-slate-500 text-sm">
          Upload on:{" "}
          <span className="font-semibold">
            {new Date(product.createdAt).toLocaleDateString()}
          </span>
        </p>

        <p className="text-slate-600 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">
            ${product.price}
          </span>
          <span
            className={`text-sm font-medium ${product.stock > 0 ? "text-emerald-600" : "text-red-500"}`}
          >
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
}
