import { Outlet, useParams } from "react-router-dom";

import { ShopsNavbar } from "../components/navbar/ShopsNavbar";
import Cart from "../components/cart/Cart";
import { useStateContext } from "../Contexts/StateContext";
import SearchResultCount from "../components/search/SearchResultCount";
import Wishlist from "../components/wishlist/WishList";

export const ShopsLayout = () => {
  const { category } = useParams();

  const { showCart, foundItem, searchItem, productInfo } = useStateContext();

  const filteredCategory = productInfo.filter((productCategory) => {
    productCategory.url === category;
  });

  console.log("filtered category", filteredCategory);
  return (
    // set relative positioning for the container if cart is Open
    <div className={`${showCart ? "relative" : " "}`}>
      <div className={`custom-container  bg-primary-white pt-10 `}>
        <ShopsNavbar />
        <SearchResultCount
          styleResult="lg:hidden text-primary-veryDarkGray mt-8"
          searchItem={searchItem}
          foundItem={foundItem}
        />
        <Cart />
        <Wishlist />

        <Outlet context={filteredCategory[0]} />
      </div>
    </div>
  );
};
