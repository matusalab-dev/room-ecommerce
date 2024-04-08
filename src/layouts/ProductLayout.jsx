import { Outlet, useParams } from "react-router-dom";

import { useStateContext } from "../contexts/StateContext";
import { ShopsNavbar } from "../components/navbar/ShopsNavbar";
import Cart from "../components/cart/Cart";
import { CustomContainer } from "./CustomContainer";

const ProductLayout = () => {
  const { productid } = useParams();
  const { productInfo, setProductInfo } = useStateContext();

  // const { value, setValue } = useLocalStorage("product");

  const filteredProduct = productInfo.filter(
    (product) => product.id === productid
  );

  return (
    <CustomContainer className={` max-w-[95%] flex-col mt-10`}>
      <ShopsNavbar />
      <Cart />
      <Outlet context={filteredProduct[0]} />
    </CustomContainer>
  );
};

export default ProductLayout;
