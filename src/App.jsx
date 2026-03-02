import Page from "./Component/Page";
import CartProvider from "./Provider/CartProvider";
import ProductProvider from "./Provider/ProductProvider";

export default function App() {
  return (
    <>
      <CartProvider>
        <ProductProvider>
          <Page />
        </ProductProvider>
      </CartProvider>
    </>
  );
}
