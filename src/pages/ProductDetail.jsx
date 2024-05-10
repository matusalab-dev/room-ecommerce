import { useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

import { useStateContext } from "../contexts/StateContext";
import CurrencyFormatter from "../utils/currencyFormatter";
import { CustomContainer } from "../layouts/CustomContainer";

import IconArrow from "../assets/icons/IconArrow";

const ProductDetail = () => {
  const { handleInc, handleDec, qty, handleAddToCart } = useStateContext();

  const productsDetail = useOutletContext();

  const [index, setIndex] = useState(0);

  // console.log("products in products-detail ", productsDetail);

  {
    /* our product collections section */
  }
  return (
    <CustomContainer
      key={productsDetail.id}
      className="flex my-12 justify-between flex-col  max-w-[67.7%] sm:max-w-sm xs:max-w-[19rem]  "
    >
      <NavLink to="../shopping" className=" w-max  p-0">
        <IconArrow className="rotate-180" />
      </NavLink>

      {/* {console.log("in cart", productsDetail.inCart)} */}
      <div className=" flex justify-between gap-12 lg:flex-col md:pb-8">
        {" "}
        <div className=" flex flex-col  items-center xl:shrink-0">
          <h1 className="mx-auto text-center capitalize text-2xl font-serif font-semibold sm:font-medium  mt-6 mb-6 ">
            {productsDetail.name}
          </h1>
          <div className="relative basis-full max-w-md sm:max-w-sm xs:max-w-[19rem] ">
            <figure className="w-full h-full ">
              <img
                src={
                  productsDetail.imageVariants[index] == productsDetail.imageUrl
                    ? productsDetail.imageUrl
                    : productsDetail.imageVariants[index]
                }
                // src={productsDetail.imageUrl}
                alt={productsDetail.name}
                className="rounded-sm z-10 object-cover block w-full max-w-full h-72"
              />
              <div className="flex justify-between mt-2 gap-1 overflow-x-scroll">
                {productsDetail.imageVariants.map((el, i) => {
                  return (
                    <img
                      src={el}
                      key={i}
                      alt={productsDetail.name}
                      onMouseEnter={() => setIndex(i)}
                      onMouseLeave={() => setIndex(0)}
                      className="w-[5.6rem] h-20 xs:w-[4.5rem] xs:h-[4.5rem] rounded-sm z-10 object-cover block  "
                    />
                  );
                })}
              </div>
            </figure>
          </div>
        </div>
        <div
          key={productsDetail.id}
          className="flex flex-col  mt-[9.3%]  md:mt-0 space-y-10"
        >
          <p className="text-left text-primary-darkGray font-secondary font-thin text-sm max-w-[50ch] xs:max-w-[39ch] ">
            {productsDetail.description}
          </p>
          <div className="flex items-center justify-between  gap-8 xs:flex-col xs:items-start">
            <div className="max-w-min flex flex-1  items-center justify-start  xs:order-last  border-primary-black">
              <p className="font-thin text-2xl mr-3 ">Quantity</p>
              <div className="flex border border-primary-black">
                <button
                  onClick={handleDec}
                  disabled={productsDetail.inCart}
                  className="shrink-[2] text-primary-black font-thin text-3xl border-r-[1px]  h-8 px-2 flex  items-center justify-center border-primary-black"
                >
                  -
                </button>
                <span className="text-lg  flex items-center font-thin px-3 font-secondary shrink-0">
                  {qty}
                </span>
                <button
                  onClick={handleInc}
                  disabled={productsDetail.inCart}
                  className="shrink-[2] text-primary-black font-thin text-2xl h-8  px-2 border-l-[1px] flex  items-center justify-center border-primary-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-xl font-thin xs:font-semibold">
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
              }bg-gray-900  px-10 py-4 xl:px-4 xl:py-2 text-xl shrink-0 max-content  font-thin border-[1.2px] border-primary-black`}
            >
              add to cart
            </button>
            <Link
              title="buy now!"
              to="/payment/checkout"
              className=" px-10 py-4  xl:px-4 xl:py-2 text-xl shrink-0 sm:self-start bg-primary-black hover:bg-primary-darkGray hover:text-primary-white transition ease-out   text-primary-white font-thin"
            >
              buy now!
            </Link>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default ProductDetail;
