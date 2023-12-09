import ProductList from "../components/productList";
import ProductCategory from "../components/ProductCategory";

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
