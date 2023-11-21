import ProductList from "../components/productList";
import ProductCategory from "../components/ProductCategory";
import { CustomContainer } from "../layouts/Custom-container";
import Footer from "../layouts/Footer";

const Shops = () => {
  return (
    <>
      {/* product category */}
      <ProductCategory />
      {/* our product collections section */}
      <ProductList />
    </>
  );
};

export default Shops;
