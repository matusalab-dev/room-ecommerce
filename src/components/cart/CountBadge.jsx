const CountBadge = ({ handleShow, Qty, icon }) => {
  return (
    <span className="cartWrapper flex relative ">
      {icon}
      <sup className="cart-qty">{Qty}</sup>
    </span>
  );
};

export default CountBadge;
