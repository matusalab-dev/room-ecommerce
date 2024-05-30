import { Outlet, useParams } from "react-router-dom";

import { ShopsNavbar } from "../components/navbar/ShopsNavbar";
import Cart from "../components/cart/Cart";
import { useStateContext } from "../Contexts/StateContext";
import SearchResultCount from "../components/search/SearchResultCount";
import Wishlist from "../components/wishlist/WishList";

export const ShopsLayout = () => {
  const { productid } = useParams();
  const { category } = useParams();

  console.log("category-params", category);
  const { showCart, foundItem, searchItem, productInfo } = useStateContext();

  const filteredCategory = productInfo.filter((productCategory) => {
    productCategory.url === category;
  });

  const filteredProduct = productInfo.filter(
    (product) => product.id === productid
  );
  // const [productItem, setProductItem] = useLocalStorage(
  //   "product-item",
  //   filteredProduct[0]
  // );
  console.log("product-item", filteredProduct[0]);

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

        <Outlet
          context={{
            filteredCategory: filteredCategory[0],
            filteredProduct: filteredProduct[0],
          }}
        />
      </div>
    </div>
  );
};
