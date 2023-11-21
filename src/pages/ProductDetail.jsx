import React, { useState, useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { CustomContainer } from "../layouts/Custom-container";
import { useStateContext } from "../Contexts/StateContext";
import CurrencyFormatter from "../utils/CurrencyFormatter";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { NavLinkList } from "../components/NavList";

const ProductDetail = () => {
  const {
    productDetail,
    cartStatus,
    handleInc,
    handleDec,
    qty,
    handleAddToCart,
    cartItems,
  } = useStateContext();

  const productsDetail = useOutletContext();

  const [index, setIndex] = useState(0);

  console.log("products in products-detail ", productsDetail);

  {
    /* our product collections section */
  }
  return (
    <CustomContainer
      key={productsDetail.id}
      className="flex mt-6 justify-between flex-col lg:max-w-full max-w-[67.7%] "
    >
      <NavLink to="../shopping" className=" w-max mt-6 p-0">
        <FaLongArrowAltLeft size="2em" className=" cursor-pointer self-top" />
      </NavLink>

      {console.log("in cart", productsDetail.inCart)}
      <div className=" flex justify-between gap-12">
        {" "}
        <div className=" flex flex-col max-w-md shrink-0">
          <h1 className="mx-auto text-center capitalize text-2xl font-serif font-semibold mt-6 mb-6 ">
            {productsDetail.name}
          </h1>
          <div className="relative basis-full ">
            <figure className="w-full h-full ">
              <img
                src={
                  productsDetail.imageVariants[index] == productsDetail.imageUrl
                    ? productsDetail.imageUrl
                    : productsDetail.imageVariants[index]
                }
                alt={productsDetail.name}
                className="rounded-sm z-10 object-cover block w-full max-w-full h-72"
              />
            </figure>
            {/* <figcaption className=" product__figcaption max-w-[16ch]">
              {productsDetail.name}
            </figcaption> */}
            {/* <div className="overlay--inner w-1/3"></div> */}
          </div>
          <div className="flex gap-3 mt-2 ">
            {productsDetail.imageVariants.map((el, i) => {
              return (
                <>
                  {" "}
                  <img
                    src={el}
                    key={i}
                    alt={productsDetail.name}
                    onMouseEnter={() => setIndex(i)}
                    className="w-20 h-20 rounded-sm z-10 object-cover block  "
                  />{" "}
                </>
              );
            })}
          </div>
        </div>
        <div
          key={productsDetail.id}
          className="flex flex-col  mt-[9.3%] space-y-10"
        >
          <p className="text-left text-primary-darkGray font-secondary font-thin text-sm max-w-[50ch]">
            {productsDetail.description}
          </p>
          <div className="flex items-center  gap-8">
            <p className="font-thin text-2xl">quantity</p>
            <div className="flex flex-1 max-w-min items-center justify-between border-[1.5px] border-primary-black">
              <button
                onClick={handleDec}
                disabled={productsDetail.inCart}
                className="shrink-[2] text-primary-black font-thin text-4xl border-r-[1px] h-6 px-2 py-0 flex  items-center justify-center border-primary-black"
              >
                -
              </button>
              <span className="text-2xl  flex font-thin py-1 px-3 font-secondary shrink-0">
                {qty}
              </span>
              <button
                onClick={handleInc}
                disabled={productsDetail.inCart}
                className="shrink-[2] text-primary-black font-thin text-3xl px-2 border-l-[1px] h-6 py-0 flex  items-center justify-center border-primary-black"
              >
                +
              </button>
            </div>
            <p className="text-xl font-medium">
              ${CurrencyFormatter("en-US", productsDetail.price)}
            </p>
          </div>
          <div className="flex justify-between">
            <button
              disabled={productsDetail.inCart}
              title={`${
                productsDetail.inCart ? "product is already in the cart" : ""
              }`}
              onClick={() => handleAddToCart(productsDetail, qty)}
              className={`${
                productsDetail.inCart &&
                "bg-gray-900 cursor-not-allowed text-gray-100 border-gray-800"
              }bg-gray-900  px-10 py-4 text-xl shrink-0 max-content  font-thin border-[1.2px] border-primary-black`}
            >
              add to cart
            </button>
            <NavLinkList
              title="buy now!"
              link="./NotFound"
              className=" px-10 py-4 text-xl shrink-0 bg-red-600 text-primary-white font-thin border-2 border-red-600"
            >
              buy now!
            </NavLinkList>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default ProductDetail;
