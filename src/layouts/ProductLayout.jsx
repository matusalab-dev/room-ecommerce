// import { Outlet, useParams } from "react-router-dom";

// import { useStateContext } from "../Contexts/StateContext";
// import { ShopsNavbar } from "../components/navbar/ShopsNavbar";
// import Cart from "../components/cart/Cart";
// import { CustomContainer } from "./CustomContainer";
// import Wishlist from "../components/wishlist/WishList";
// import { useLocalStorage } from "../hooks/useStorage";

// const ProductLayout = () => {
//   const { productid } = useParams();
//   const { productInfo, setProductInfo } = useStateContext();

//   const filteredProduct = productInfo.filter(
//     (product) => product.id === productid
//   );
//   // const [productItem, setProductItem] = useLocalStorage(
//   //   "product-item",
//   //   filteredProduct[0]
//   // );
//   console.log("product-item", filteredProduct[0]);
//   return (
//     <CustomContainer className={` max-w-[95%] flex-col mt-10`}>
//       <ShopsNavbar />
//       <Cart />
//       <Wishlist />
//       <Outlet context={filteredProduct[0]} />
//     </CustomContainer>
//   );
// };

// export default ProductLayout;
