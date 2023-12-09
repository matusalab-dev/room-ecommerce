import React, { createContext, useContext, useState } from "react";
import CarousalList from "../data/CarousalList";
import shoppingProduct from "../data/shoppingProduct";

const StateContext = createContext([]);

export const StateProvider = ({ children }) => {
  const [index, setIndex] = useState(0);

  // shopping Products details
  const productsDetail = shoppingProduct();
  // products detail in local storage

  // Cart state
  const [productInfo, setProductInfo] = useState(productsDetail);
  const [showCart, setShowCart] = useState(false);
  const [showReact, setShowReact] = useState(false);
  const [cartStatus, setCartStatus] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // a function get called after clicking `addtocart` button
  // accept two arguments, the product instance we want to add to the cart and the quantity of the product.
  function handleAddToCart(productToAdd, quantity) {
    // check if the product is already exist in the cart
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    // if it is in the cart
    if (existingCartItem) {
      // update productInfo after updating the existing cartItems in-cart state into true
      setProductInfo((prevProductInfo) => {
        const updatedCartItems = prevProductInfo.map((productInfo) =>
          productInfo.id === productToAdd.id
            ? { ...productInfo, inCart: true }
            : productInfo
        );

        return updatedCartItems;
      });

      // cart status update
      setCartStatus("product is added to cart!");

      setShowCart(true);
      return;
    }

    // if it is not in the cart then add it to the cart. then update the incart status into true
    setCartItems([
      ...cartItems,
      { ...productToAdd, quantity: quantity, inCart: true },
    ]);
    // then update price and quantity accordingly
    setTotalQty((prevTotalQty) => prevTotalQty + quantity);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + productToAdd.price * quantity
    );
  }

  //  function to remove a product from the cart and update  state accordingly
  function handleRemoveFromCart(cartProduct) {
    // find that cart items with product-id to be removed.
    const productFound = cartItems.find(
      (cartItems) => cartItems.id === cartProduct.id
    );

    // return all cart items except those with id that we want to get removed
    const removedItem = cartItems.filter((item) => item.id !== cartProduct.id);
    setCartItems(removedItem);

    setTotalQty((prevTotalQty) => prevTotalQty - productFound.quantity);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - productFound.price * productFound.quantity
    );

    // update productInfo after removing the existing cartItems, update in-cart state into false
    setProductInfo((prevProductInfo) => {
      const updatedCartItems = prevProductInfo.map((productInfo) =>
        productInfo.id === cartProduct.id
          ? { ...productInfo, inCart: false }
          : productInfo
      );

      return updatedCartItems;
    });
    // splice is a mutating function, it violates the rule of react functional state
    // cartItems.splice(cartItems.indexOf(productFound), 1);
  }

  // handle cart quantity of individual existing products added in the cart
  function handleCartQuantity(id, type) {
    // find the product with the specified id
    const foundCartItem = cartItems.find((item) => item.id === id);

    // filter out products that are new to the cart
    const newCartItem = cartItems.filter((item) => item.id !== id);

    // items new to the cart will get added as a new to the cart,
    // quantities of existing items will get updated accordingly.
    if (type === "inc") {
      setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        const totalQuantity = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );

        const totalPrice = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        );

        setTotalQty(totalQuantity);
        setTotalPrice(totalPrice);

        return updatedCartItems; // Return the updated state
      });
    } else if (type === "dec") {
      setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.map((item) => {
          if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });

        const totalQuantity = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        const totalPrice = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        );

        setTotalQty(totalQuantity);
        setTotalPrice(totalPrice);

        return updatedCartItems; // Return the updated state
      });
    }
  }

  // function that handles the hiding and showing of cart UI
  function handleShowCart() {
    setShowCart((prevShow) => !prevShow);
  }
  function handleShowReact() {
    setShowReact((prevShow) => !prevShow);
  }

  function handleInc() {
    setQty((prevQty) => prevQty + 1);
  }

  function handleDec() {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      }
      return prevQty - 1;
    });
  }

  // searching for products
  const [searchItem, setSearchItem] = useState("");
  const [foundItem, setFoundItem] = useState(productInfo);

  function handleSearch(e) {
    const searchValue = e.target.value;
    setSearchItem(() => searchValue.toLowerCase());

    console.log("searchItem:", searchItem.split(""));
    // console.log("Product name:", productInfo[0].name);
    const productFound = productInfo.filter(
      (product) =>
        searchItem !== "" &&
        product.name.toLowerCase().trim().includes(searchItem)
    );

    console.log(productFound);

    setFoundItem(productFound);
    console.log("search results found : " + productFound.length);
  }
  console.log("foundItem:", foundItem);
  console.log("search Term:", searchItem);

  // slides state start
  // home-page slides context
  const slidesDetail = CarousalList();
  // console.log(productsDetails[0]);
  // handle the next click
  const handleNext = () => {
    if (index < slidesDetail.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }

    if (index === slidesDetail.length - 1) {
      setIndex((prevIndex) => prevIndex - 2);
    }

    return;
  };

  // handle previous click
  const handlePrev = () => {
    if (index > 0 && index < slidesDetail.length) {
      setIndex((prevIndex) => prevIndex - 1);
    }

    if (index === 0) {
      setIndex((prevIndex) => prevIndex + 2);
    }

    return;
  };
  // slides state end

  return (
    <StateContext.Provider
      value={{
        index,
        slidesDetail,
        handleNext,
        handlePrev,
        productInfo,
        setProductInfo,
        handleDec,
        handleInc,
        qty,
        totalQty,
        totalPrice,
        setTotalPrice,
        showCart,
        setShowCart,
        cartItems,
        cartStatus,
        handleShowCart,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartQuantity,
        handleSearch,
        searchItem,
        setSearchItem,
        foundItem,
        handleShowReact,
        showReact,
        setShowReact,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
