import { FaEye, FaHeart, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { useStateContext } from "../Contexts/StateContext";
import { NavLink } from "react-router-dom";
import CurrencyFormatter from "../utils/CurrencyFormatter";
import React, { useState, useMemo } from "react";
import { CustomContainer } from "../layouts/Custom-container";
import Footer from "../layouts/Footer";

const ProductList = () => {
  const { foundItem, handleAddToCart, handleRemoveFromCart, cartItems, qty } =
    useStateContext();
  // const [currentProduct, setCurrentProduct] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  function handleMouseEnter(productId) {
    setHoveredItemId(productId);
    // handleShowReact();
  }
  function handleMouseLeave() {
    setHoveredItemId(null);
    // handleShowReact();
  }

  const reactionStatusTemplate = (currentProduct, qty) => {
    // check about useMemo react Hooks
    // useMemo(() => {

    // console.log("hoveredItemId:", hoveredItemId);
    // // const isHovered = hoveredItemId === productToAdd.id;
    // console.log("react-status product:", foundItem);

    // const currentProduct = foundItem.filter((item) => {
    //   return item.id === hoveredItemId;
    // });
    // console.log("filtered currentProduct: ", currentProduct);

    //replace w-28 if you have more than one buttons
    return (
      // <div className="absolute -top-28 flex max-w-28 px-4 py-2 mx-auto justify-between bg-primary-white">
      <button
        role="button"
        disabled={currentProduct.inCart}
        title={`${
          currentProduct.inCart
            ? "product is already in the cart"
            : "add to cart"
        }`}
        className="absolute -top-28 flex max-w-28 px-4 py-2 mx-auto justify-between bg-primary-white"
        onClick={() => handleAddToCart(currentProduct, qty)}
      >
        <FaShoppingBasket
          fontWeight="100"
          className="font-thin text-base text-primary-darkGray"
        />
      </button>
      /* <button
        role="button"
        // title="add to cart"
        // className="w-6 h-8 items-center self-end flex justify-center text-gray-900 font-semibold bg-gray-500 px-4 py-1 text-lg text-center translate-y-8 z-20"
        onClick={() => handleAddToCart(productToAdd, qty)}
      >
        <FaEye
          fontWeight="100"
          className="font-thin text-base text-primary-darkGray"
        />
      </button> */
      /* <button
          role="button"
          // title="add to cart"
          // className="w-6 h-8 items-center self-end flex justify-center text-gray-900 font-semibold bg-gray-500 px-4 py-1 text-lg text-center translate-y-8 z-20"
          onClick={() => console.log("loved it!")}
        >
          <FaRegHeart
            fontWeight="100"
            className="font-thin text-base text-primary-darkGray"
          />
        </button> */
      /* <button
          role="button"
          // title="add to cart"
          // className="w-6 h-8 items-center self-end flex justify-center text-gray-900 font-semibold bg-gray-500 px-4 py-1 text-lg text-center translate-y-8 z-20"
          onClick={() => handleRemoveFromCart(cartItems)}
        >
          <FaEye
            fontWeight="100"
            className="font-thin text-base text-primary-darkGray"
          />
        </button> */
      // </div>
    );
  };
  // }, [foundItem]);

  // const handleReactionStatus = (eventType, productid) => {
  //   if (eventType === "onMouseEnter") {
  //     setHoveredItemId(productid);
  //   } else if (eventType === "onMouseLeave") {
  //     setHoveredItemId(null);
  //   }
  // };

  return (
    <>
      <main className="grid full-bleed inverse mt-20  pt-6 pb-24">
        <h1 className="heading-collection inline-block  mx-auto text-center text-5xl font-serif font-semibold mt-12 mb-16 ">
          Our Collection
        </h1>
        <div
          className={`${
            foundItem &&
            "grid grid-cols-filteredCol justify-start justify-items-start "
          } grid gap-x-6 gap-y-24 grid-cols-productCol grid-rows-productRow grid-flow-row-dense product__auto-row`}
        >
          {foundItem.map((productDetail) => {
            const isHovered = hoveredItemId === productDetail.id;
            console.log("isHovered:", isHovered);

            // Apply React.memo to the entire component function
            const MemoizedNavLink = React.memo(() => (
              <NavLink
                to={`/shop/${productDetail.id}`}
                key={productDetail.id}
                className="relative group"
                // onMouseEnter={() =>
                //   handleReactionStatus("onMouseEnter", productDetail.id)
                // }
                // onMouseLeave={() =>
                //   handleReactionStatus("onMouseLeave", productDetail.id)
                // }

                onMouseEnter={() => handleMouseEnter(productDetail.id)}
                onMouseLeave={handleMouseLeave}
              >
                <figure className="w-full h-full overflow-hidden ">
                  <img
                    src={productDetail.imageUrl}
                    alt="armchair & table furniture"
                    className={`z-10 object-cover block w-full max-w-full h-full transition-all ease-out ${
                      isHovered ? "group-hover:scale-105" : ""
                    }`}
                  />
                </figure>
              </NavLink>
            ));

            return (
              <div key={productDetail.id} className=" flex flex-col ">
                <MemoizedNavLink />

                <div className="relative z-10 bg-primary-white space-y-1  py-4 flex  flex-col items-center">
                  <span className="font-semibold text-primary-darkGray">
                    ${CurrencyFormatter("en-US", productDetail.price)}
                  </span>
                  <figcaption className="text-center font-thin text-sm capitalize  max-w-[20ch]">
                    {productDetail.name}
                  </figcaption>
                  {/* status of the product */}
                  {isHovered && reactionStatusTemplate(productDetail, qty)}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <CustomContainer className="absolute  right-0 left-0 mx-0 max-w-full">
        <Footer className="w-full  mb-0" />
      </CustomContainer>
    </>
  );
};

export default ProductList;
