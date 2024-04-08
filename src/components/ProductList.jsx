import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import { useStateContext } from "../contexts/StateContext";
import CurrencyFormatter from "../utils/currencyFormatter";

import Footer from "../layouts/Footer";
import { GridLayout } from "../layouts/GridLayout";

export const ProductItem = ({ searchItem, route }) => {
  const { handleAddToCart, qty } = useStateContext();
  const [hoveredItemId, setHoveredItemId] = useState(null);

  function handleMouseEnter(productId) {
    setHoveredItemId(productId);
  }
  function handleMouseLeave() {
    setHoveredItemId(null);
  }

  const reactionStatusTemplate = (currentProduct, qty) => {
    // replace width with w-28 if you have more than one buttons
    return (
      <div
        className="w-20 absolute -top-[170%] flex px-4 py-2 mx-auto justify-between bg-primary-white
      "
      >
        <button
          role="button"
          disabled={currentProduct.inCart}
          title={`${
            currentProduct.inCart
              ? "product is already in the cart"
              : "add to cart"
          }`}
          onClick={() => handleAddToCart(currentProduct, qty)}
        >
          <FaShoppingBasket
            fontWeight="100"
            className="font-thin text-base text-primary-darkGray"
          />
        </button>

        <button
          role="button"
          // disabled={currentProduct.inCart}
          title="add to wish list"
          onClick={() => console.log("I wish to buy this", currentProduct.name)}
        >
          <FaRegHeart
            fontWeight="100"
            className="font-thin text-base text-primary-darkGray"
          />
        </button>

        {/* <button
          role="button"
          title="add to wish list"
          className="w-8 h-8 items-center self-end flex justify-center text-primary-darkGray font-semibold bg-primary-white px-4 py-1 text-lg text-center translate-y-8 z-20"
          onClick={() => console.log("loved it!")}
        >
          <FaRegHeart
            fontWeight="100"
            className="font-thin text-base text-primary-darkGray bg-primary-white"
          />
        </button> */}
      </div>
    );
  };

  return (
    <GridLayout className="grid grid-cols-8 lg:grid-cols-6 justify-items-center lg:justify-center">
      {searchItem.map((productDetail) => {
        const isHovered = hoveredItemId === productDetail.id;
        console.log("isHovered:", isHovered);

        // memoized hovered navLinks
        const MemoizedNavLink = memo(() => (
          <NavLink
            to={`./${productDetail.id}`}
            key={productDetail.id}
            className="relative group "
            onMouseEnter={() => handleMouseEnter(productDetail.id)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <figure className="w-full h-full overflow-hidden bg-gray-300">
              <img
                src={productDetail.imageUrl}
                alt={productDetail.name}
                // loading="lazy"
                className={`z-10 object-cover block w-full max-w-full h-56 transition-all ease-out ${
                  isHovered ? "group-hover:scale-105" : ""
                }`}
              />
            </figure>
          </NavLink>
        ));

        return (
          <div
            key={productDetail.id}
            className="h-20 flex flex-col max-w-xs sm:col-span-8 md:col-span-3 lg:col-span-2  col-span-2 "
          >
            <MemoizedNavLink />

            <div className="relative z-10 bg-primary-white space-y-1  py-4 flex  flex-col items-center">
              <span className="font-semibold text-primary-darkGray">
                ${CurrencyFormatter("en-US", productDetail.price)}
              </span>
              <figcaption className="text-center font-thin text-sm capitalize  max-w-[20ch]">
                {productDetail.name}
              </figcaption>
              {/* reaction status of the product */}
              {isHovered && reactionStatusTemplate(productDetail, qty)}
            </div>
          </div>
        );
      })}
    </GridLayout>
  );
};

const ProductList = ({ headingTitle, headingClass, children }) => {
  const productListHeadingStyle = twMerge(
    "heading-collection block  mx-auto text-center text-5xl sm:text-4xl  font-serif font-semibold capitalize mt-10 mb-16 ",
    headingClass
  );
  return (
    <>
      <main className="full-bleed inverse mt-16  pt-6 pb-24">
        <h1 className={productListHeadingStyle}>{headingTitle}</h1>
        {children}
      </main>
      <div className="absolute  right-0 left-0 mx-0 max-w-full">
        <Footer className="sm:max-w-full" />
      </div>
    </>
  );
};

export default ProductList;
