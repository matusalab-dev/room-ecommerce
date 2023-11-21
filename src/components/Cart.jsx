import React, { useRef } from "react";
import { NavLinkList } from "./NavList";
import { useStateContext } from "../Contexts/StateContext";
import CurrencyFormatter from "../utils/CurrencyFormatter";
import {
  AiFillCloseSquare,
  AiFillDollarCircle,
  AiOutlineDelete,
  AiOutlineDollar,
  AiTwotoneDollarCircle,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const CartWrapper = ({
  cartProducts,
  quantity,
  handleRemove,
  handleShowCart,
  handleCartQuantity,
}) => {
  // const cartRef = useRef();

  // console.log(cartProducts);

  return (
    <div className="space-y-4">
      {/* check if the cart is empty */}
      {cartProducts.length < 1 && (
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className="font-thin"> your shopping bug is empty</h2>
          <NavLinkList
            title="go back to shopping"
            link="../shopping"
            // style={({ isActive }) => {
            //   return isActive ? { cartStyles } : { cartStyles };
            // }}
            // style={cartStyles}
            onClick={handleShowCart}
            className="inline-block px-3 py-2 text-primary-white self-center items-start bg-primary-black"
          ></NavLinkList>
        </div>
      )}

      {/* if it's not empty, render it out. */}
      {cartProducts.length >= 1 &&
        cartProducts.map((cartItem) => {
          // console.log(cartItem);
          const { id, imageUrl, name, price, quantity } = cartItem;
          // console.log(imageUrl);
          return (
            <div
              key={id}
              className="bg-primary-white py-6 px-6 hover:shadow-md hover:shadow-primary-dark-gray gap-y-7 gap-x-5   justify-items-start grid grid-cols-[7.5em,minmax(max-content,100%),minmax(max-content,100%)] grid-rows-[repeat(2,min-content)]"
            >
              <img
                src={imageUrl}
                alt="cart product"
                className="bg-primary-black max-w-full col-[1/2] row-[1/3] h-full object-cover w-full"
              />
              <p className=" font-thin p-0 place-items-start text-[1rem] col-[2/3] max-w-[18  ch]">
                {name}
              </p>
              <p className="text-[1rem] font-thin col-[3/4] self-start place-self-end ">
                ${CurrencyFormatter("en-US", price)}
              </p>
              <div className="flex items-center justify-between border-[1px] border-primary-black">
                <button
                  onClick={() => handleCartQuantity(id, "dec")}
                  className=" text-primary-black text-3xl flex  items-center justify-center border-r-[1px] h-4 border-primary-black px-2"
                >
                  -
                </button>
                <span className="text-lg flex font-thin py-0 px-2 font-secondary">
                  {quantity}
                </span>
                <button
                  onClick={() => handleCartQuantity(id, "inc")}
                  className="text-primary-black font-thin text-2xl border-l-[1px] h-4 px-2 py-0 flex  items-center justify-center border-primary-black"
                >
                  +
                </button>
              </div>
              <button
                className="self-end ml-auto"
                onClick={() => handleRemove(cartItem, quantity)}
              >
                <AiOutlineDelete fontSize="17px" fontWeight="100" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

const Cart = () => {
  // const cartRef = useRef();
  const {
    showCart,
    handleShowCart,
    totalQty,
    qty,
    cartItems,
    totalPrice,
    handleRemoveFromCart,
    handleCartQuantity,
  } = useStateContext();

  console.log(totalQty);
  console.log(cartItems);
  // const cartItemsInMap = new Map();
  // cartItemsInMap.set("cartItems", cartItems);
  // console.log(cartItemsInMap.get("cartItems"));
  // const getCartItems = cartItemsInMap.get("cartItems");

  return (
    <article
      className={`${
        showCart ? "translate-x-[0px] " : " -translate-x-[10000px]"
      } space-y-9 shadow-black shadow-sm   overflow-y-scroll px-6 py-7 z-50 absolute right-0 top-0 h-screen bg-[var(--color-light-gray)] text-primary-black`}
    >
      <header className="flex items-center gap-8 justify-between">
        <p className="text-sm  font-thin">
          Your shopping cart items ({totalQty})
        </p>
        <button>
          <AiFillCloseSquare
            fontSize="22px"
            // fontWeight="200"
            className="font-thin"
            onClick={handleShowCart}
          />
        </button>
      </header>
      <div>
        <CartWrapper
          cartProducts={cartItems}
          quantity={qty}
          handleRemove={handleRemoveFromCart}
          handleShowCart={handleShowCart}
          handleCartQuantity={handleCartQuantity}
        />
      </div>
      {totalPrice > 0 && (
        <>
          {" "}
          <div className="flex border-[0.8px]  border-primary-black border-dashed"></div>
          <div className="mt-auto grid gap-y-3 gap-x-4 w-full grid-cols-[repeat(2,minmax(max-content,1fr))] grid-rows-[min-content,min-content]">
            <p className="font-thin text-sm col-[1/2] row-[1/2]">
              Total Price for {totalQty} {`${totalQty > 1 ? "Items" : "Item"}`}
            </p>
            <NavLink
              title="buy now"
              link="./NotFound"
              to="./NotFound"
              className=" px-6 py-3 rounded-sm  hover:shadow-sm hover:shadow-primary-darkGray text-center text-2xl justify-items-center mx-auto self-center col-start-2 col-end-3 row-[1/3]   text-primary-white bg-primary-black font-thin"
            >
              buy now
            </NavLink>
            <p className="flex text-3xl text-primary-black font-secondary font-thin col-[1/2] row-[2/3] justify-self-start">
              ${CurrencyFormatter("en-US", totalPrice)}
            </p>
          </div>
        </>
      )}
    </article>
  );
};

export default Cart;
