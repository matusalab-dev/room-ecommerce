import { useStateContext } from "../Contexts/StateContext";
import ProductList, { ProductItem } from "../components/ProductList";
import ProductCategory from "../components/ProductCategory";

const Shops = () => {
  const { foundItem } = useStateContext();

  return (
    <>
      <ProductCategory />
      {/* <ProductList headingTitle="Our Collections"> */}
      <ProductList headingTitle="Featured Items" headingClass="mb-0 xs:mb-0">
        <p className="mb-20 xs:mb-12 text-lg text-primary-veryDarkGray text-center">
          Must-have pieces selected every month
        </p>
        <ProductItem searchItem={foundItem} />
      </ProductList>
    </>
  );
};

export default Shops;
