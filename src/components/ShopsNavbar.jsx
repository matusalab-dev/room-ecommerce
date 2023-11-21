import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useStateContext } from "../Contexts/StateContext";
import { NavListShop } from "./Navbar";
import { InputComponent } from "../components/InputComponent";
import "../App.css";
import blacklogo from "../assets/images/logo-black.svg";

export const ShopsNavbar = () => {
  const {
    handleShowCart,
    totalQty,
    searchItem,
    foundItem,
    handleSearch,
    productInfo,
  } = useStateContext();

  return (
    <>
      {" "}
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`  nav nav-desktop flex items-center justify-between gap-6`}
      >
        {/* <div className="left flex"> */}
        <NavLink to="/" className="  text-3xl shrink-0 mr-20 ">
          <img src={blacklogo} alt="room logo" className="h-4 w-[62px]" />
        </NavLink>
        {/* // nav-list */}
        <NavListShop className="max-w-[6em] text-primary-darkGray" />
        <form className=" w-1/2 items-center mt-0 bg-transparent focus:border-primary-darkGray  active:border-primary-darkGray placeholder:text-primary-veryDarkGray text-primary-darkGray font-sans placeholder:font-sans font-semibold self-center">
          <InputComponent
            className="peer w-full focus:outline-primary-darkGray rounded-sm focus:border-none outline-offset-0  items-center mt-0 bg-transparent focus:border-primary-darkGray border-[1.7px] active:border-primary-darkGray placeholder:text-primary-veryDarkGray text-primary-darkGray font-sans placeholder:font-sans font-semibold pl-4 pr-2 py-2 self-center"
            placeholder="Looking for our products"
            name="search-input"
            labelIconClass=" none w-0 h-0"
            labelClass="absolute right-1"
            value={searchItem}
            onChange={(e) => handleSearch(e)}
            label={
              <AiOutlineSearch
                // onClick={handleSearch}
                fontWeight="100"
                className=" font-thin text-4xl border-none text-primary-darkGray shrink-0  hover:cursor-pointer"
              />
            }
            inputWrapper="mt-0 w-full  relative "
          />
        </form>
        <ul className="flex gap-6 max-w-[9.33em] justify-between">
          <li>
            <AiOutlineUser
              fontSize="28px"
              className="text-primary-darkGray shrink-0 hover:cursor-pointer"
            />
          </li>
          <li>
            <span className="cartWrapper flex relative ">
              <AiOutlineShoppingCart
                className="text-primary-darkGray shrink-0 hover:cursor-pointer"
                fontSize="29px"
                onClick={handleShowCart}
              />
              <sup className="cart-qty ">{totalQty}</sup>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};
