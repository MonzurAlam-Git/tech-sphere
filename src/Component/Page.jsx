import { useContext } from "react";
import { CartContext } from "../Context/context";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import ProductCatalog from "./Main/FiltersSortingSection/ProductCatalog";

export default function Page() {
  const { showCart } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <p className="text-center text-red-500">Hero Component Commented</p>
      {showCart ? (
        <Cart />
      ) : (
        <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
          {/* <Hero /> */}
          <ProductCatalog />
        </main>
      )}

      <Footer />
    </>
  );
}
