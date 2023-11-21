import { Children, createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [noItem, setNoitem] = useState(1);

  function handleInc() {
    if (noItem > 0) {
      setInc((prevInc) => prevInc + 1);
    }
    return;
  }

  function handleDec() {
    if (noItem > 1) {
      setNoitem((prevDec) => prevDec - 1);
    }
    return;
  }

  return (
    <cartContext.Provider value={{ noItem, handleInc, handleDec }}>
      {Children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => useContext(cartContext);
