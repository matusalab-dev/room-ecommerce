import { Outlet, useParams } from "react-router-dom";
import { ShopsNavbar } from "../components/ShopsNavbar";
import Cart from "../components/Cart";
import Footer from "./Footer";
import { CustomContainer } from "./Custom-container";
import { useStateContext } from "../Contexts/StateContext";

export const ShopsLayout = () => {
  const { category } = useParams();
  // console.log(category);
  const { showCart, foundItem, searchItem, productInfo } = useStateContext();

  // console.log(productInfo);

  // const filteredCategory = productInfo.filter(
  //   (productCategory) => productCategory.url === category
  // );

  // console.log(filteredCategory);

  return (
    // set fixed positioning for the container
    <div className={`${showCart ? "relative" : " "}`}>
      <div className={`custom-container  bg-primary-white pt-10 `}>
        <ShopsNavbar />
        {searchItem !== "" && (
          <p className="text-sm text-primary-veryDarkGray text-left ">
            {`search results found: ${foundItem.length}`}
          </p>
        )}
        <Cart />
        {/* <div className="overlay--inner "></div> */}
        {/* <Outlet context={filteredCategory[0]} /> */}
        <Outlet />
      </div>
    </div>
  );
};
