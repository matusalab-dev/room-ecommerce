import { AiOutlineShoppingCart } from "react-icons/ai";

const CartCountBadge = ({ handleShowCart, totalQty }) => {
  return (
    <span className="cartWrapper flex relative ">
      <AiOutlineShoppingCart
        className="sm:text-[1.65rem] shrink-0 hover:cursor-pointer"
        onClick={handleShowCart}
      />
      <sup className="cart-qty">{totalQty}</sup>
    </span>
  );
};

export default CartCountBadge;
