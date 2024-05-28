import { useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

import { useStateContext } from "../../Contexts/StateContext";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { CustomContainer } from "../../layouts/CustomContainer";

import IconArrow from "../../assets/icons/IconArrow";
import {
  FaCaravan,
  FaFileExcel,
  FaFillDrip,
  FaHeart,
  FaHeartbeat,
  FaHeartBroken,
  FaRegHeart,
} from "react-icons/fa";
import CartQuantity from "../cart/CartQuantity";

const ProductPreviewView = ({ productDetail, route }) => {
  const { id, name, imageVariants, imageUrl, description, price, inCart } =
    productDetail;
  const { handleInc, handleDec, qty, handleAddToCart, handleAddToWishlist } =
    useStateContext();

  const [index, setIndex] = useState(0);

  return (
    <CustomContainer
      key={id}
      className="flex my-12 justify-between flex-col  max-w-[67.7%] sm:max-w-sm xs:max-w-[19rem]"
    >
      <NavLink to={route} className=" w-max  p-0">
        <IconArrow className="rotate-180" />
      </NavLink>

      {/* {console.log("in cart", productsDetail.inCart)} */}
      <div className="flex justify-between gap-12 lg:flex-col md:pb-8">
        <div className=" flex flex-col  items-center xl:shrink-0">
          <h1 className="mx-auto text-center capitalize text-2xl font-serif font-semibold sm:font-medium  mt-6 mb-6 ">
            {name}
          </h1>
          <div className="relative basis-full max-w-md sm:max-w-sm xs:max-w-[19rem] ">
            <figure className="relative w-full h-full ">
              <button
                className="absolute right-0 p-2 cursor-pointer bg-primary-black"
                role="button"
                disabled={productDetail.inWishlist}
                title={`${
                  productDetail.inWishlist
                    ? "product is already in a wish-list"
                    : "add to wish list"
                }`}
                onClick={() => handleAddToWishlist(productDetail, qty)}
              >
                {/* if the product is in wish-list, make Icon filled heart */}
                {productDetail.inWishlist ? (
                  <FaHeart
                    fontWeight="100"
                    size="20"
                    className="font-thin text-base text-primary-white"
                  />
                ) : (
                  <FaRegHeart
                    fontWeight="100"
                    size="20"
                    className="font-thin text-base text-primary-white"
                  />
                )}
              </button>
              <img
                src={
                  imageVariants[index] === imageUrl
                    ? imageVariants[0]
                    : imageVariants[index]
                }
                // src={productsDetail.imageUrl}
                alt={name}
                className="rounded-sm z-10 object-cover block w-full max-w-full h-72"
              />
              <div className="flex justify-between mt-2 gap-1 overflow-x-scroll">
                {imageVariants.map((el, i) => {
                  return (
                    <img
                      src={el}
                      key={i}
                      alt={name}
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
        <div key={id} className="flex flex-col  mt-[9.3%]  md:mt-0 space-y-10">
          <p className="text-left text-primary-darkGray font-secondary font-thin text-sm max-w-[50ch] xs:max-w-[39ch] ">
            {description}
          </p>
          <div className="flex items-center justify-between  gap-8 xs:flex-col xs:items-start">
            <div className="max-w-min flex flex-1  items-center justify-start  xs:order-last  border-primary-black">
              <p className=" text-xl mr-3">Quantity</p>
              <CartQuantity
                incrementQuantity={() => handleInc()}
                decrementQuantity={() => handleDec()}
                quantity={qty}
                styleQuantity="text-lg"
              />
            </div>
            <p className="text-xl font-normal">
              ${CurrencyFormatter("en-US", price)}
            </p>
          </div>
          <div className="flex justify-between xs:flex-col xs:gap-4 gap-2 text-2xl">
            <button
              disabled={inCart}
              title={`${inCart ? "product is already in the cart" : ""}`}
              onClick={() => handleAddToCart(productDetail, qty)}
              className={`${
                inCart &&
                "bg-gray-900 cursor-not-allowed text-gray-100 border-gray-800 xs:box-border"
              }bg-gray-900 xs:w-full  rounded-sm xs:px-10 px-8 py-4 shrink-0 max-content border-[1.2px] border-primary-black `}
            >
              add to cart
            </button>
            <Link
              title="buy now!"
              to="/payment/checkout"
              className="xs:w-full rounded-sm xs:px-10 px-8 py-4 shrink-0 sm:self-start bg-primary-black hover:bg-primary-darkGray hover:text-primary-white transition ease-out xl:text-center text-primary-white"
            >
              buy now!
            </Link>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default ProductPreviewView;
