const CartQuantity = ({ incrementQuantity, decrementQuantity, quantity }) => {
  return (
    <div className="flex p-0 items-center justify-between border-[1px] border-primary-black">
      <button
        // onClick={() => handleCartQuantity(id, "dec")}
        onClick={decrementQuantity}
        className=" text-primary-black text-3xl sm:text-2xl px-2 h-8 flex  items-center justify-center border-r-[1px] border-primary-black "
      >
        -
      </button>
      <p className="text-base sm:text-sm py-0 px-2 font-secondary">
        {quantity}
      </p>
      <button
        // onClick={() => handleCartQuantity(id, "inc")}
        onClick={incrementQuantity}
        className="text-primary-black font-thin text-2xl sm:text-xl border-l-[1px] px-2  h-8 self-center flex items-center justify-center text-center border-primary-black"
      >
        +
      </button>
    </div>
  );
};

export default CartQuantity;
