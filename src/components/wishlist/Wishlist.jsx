import { useStateContext } from "../../contexts/StateContext";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const {
    showWishlist,
    handleShowWishlist,
    totalWishlistQty,
    handleAddToCart,
    handleRemoveFromCart,
    totalWishlistPrice,
    wishlistItems,
  } = useStateContext();

  console.log("Wishlist", wishlistItems);

  return (
    <article
      className={`${
        showWishlist
          ? "-translate-x-[0px] xs:translate-x-1"
          : "-translate-x-[10000px]"
      } space-y-9 shadow-black shadow-sm overflow-y-scroll px-6 pt-7 pb-10 sm:px-3 sm:py-4 z-50 absolute right-0 top-0 bg-[var(--color-light-gray)] text-primary-black`}
    >
      <header className="flex items-center gap-8 sm:gap-3 justify-between">
        <p className="text-sm  font-thin">
          Your wish-list items ({totalWishlistQty})
        </p>
        <button data-message="close the cart items side-bar">
          <AiFillCloseSquare
            fontSize="22px"
            className="font-thin"
            role="button"
            aria-description="icon to close the cart items side-bar"
            onClick={handleShowWishlist}
          />
        </button>
      </header>
      <div>
        {/* Cart-item list */}
        <WishlistItem
          wishlistProducts={wishlistItems}
          handleAddToCart={handleAddToCart}
          //handleRemove={handleRemoveFromCart}
          handleShowWishlist={handleShowWishlist}
        />
      </div>
    </article>
  );
};

export default Wishlist;