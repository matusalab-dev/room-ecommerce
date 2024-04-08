import { useStateContext } from "../contexts/StateContext";
import ProductList, { ProductItem } from "../components/ProductList";
import ProductCategory from "../components/ProductCategory";

const Shops = () => {
  const { foundItem } = useStateContext();

  // useEffect(() => {
  //   // document.querySelector("#root").addEventListener("click", () => {
  //   //   console.log("document element clicked");
  //   //   handleShowCart(false);
  //   // });
  //   // return () => {};
  // }, [handleShowCart, showCart]);

  return (
    <>
      <ProductCategory />
      <ProductList headingTitle="Our Collections">
        <ProductItem searchItem={foundItem} />
      </ProductList>
    </>
  );
};

export default Shops;
