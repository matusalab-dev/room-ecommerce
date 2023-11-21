import { Outlet, useParams } from "react-router-dom";
import { useStateContext } from "../Contexts/StateContext";
import { ShopsNavbar } from "../components/ShopsNavbar";
import { CustomContainer } from "./Custom-container";
import Cart from "../components/Cart";
import { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

// export const useLocalStorage = (key, initialValue = null) => {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialValue;
//   });

//   const setItem = (newValue) => {
//     const serializedValue = JSON.stringify(newValue);
//     localStorage.setItem(key, serializedValue);
//     // setValue(serializedValue);
//     setValue(serializedValue);
//   };
//   // useEffect(() => {
//   //   setItem();
//   // }, [key, value]);
//   console.log(value);

//   return [value, setItem];
// };

const ProductLayout = () => {
  const { productid } = useParams();
  const { productInfo, setProductInfo } = useStateContext();

  const filteredProduct = productInfo.filter(
    (product) => product.id === productid
  );
  // const [productDetailStore, setProductDetailStore] = useLocalStorage(
  //   "productsDetail",
  //   filteredProduct[0]
  // );

  // setProductDetailStore(filteredProduct);
  // console.log("productdetail in store", productDetailStore);

  return (
    <CustomContainer className={` max-w-[95%] flex-col mt-10`}>
      <ShopsNavbar />
      <Cart />
      <Outlet context={filteredProduct[0]} />
    </CustomContainer>
  );
};

export default ProductLayout;
