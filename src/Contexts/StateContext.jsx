import { createContext, useContext, useState } from "react";

import CarousalList from "../data/carousalList";
import shoppingProduct from "../data/shoppingProduct";

// create context
const StateContext = createContext([]);

export const StateProvider = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  // shopping Products details
  const productsDetail = shoppingProduct();

  // products state
  const [productInfo, setProductInfo] = useState(productsDetail);
  const [showCart, setShowCart] = useState(false);
  const [cartStatus, setCartStatus] = useState("");
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleShowCart = () => {
    setShowCart((prevShown) => !prevShown);
  };

  /* a function get called after clicking `addtocart` button which accept two arguments,
   the product instance we want to add to the cart `productToAdd` and the quantity of the product `quantity`*/
  function handleAddToCart(productToAdd, quantity) {
    // check if the product exist in the cart
    const doesExist = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    // if it exist in the cart
    if (doesExist) {
      // update productInfo after updating the existing cartItems in-cart state into true
      setProductInfo((prevProductInfo) => {
        const updatedCartItems = prevProductInfo.map((productInfo) =>
          productInfo.id === productToAdd.id
            ? { ...productInfo, inCart: true }
            : productInfo
        );

        return updatedCartItems;
      });

      // update cart status
      setCartStatus("product is added to a cart!");
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
    setQty(1);
  }

  // function to remove a product from the cart and update state accordingly
  function handleRemoveFromCart(cartProduct) {
    // find that cart items with product-id to be removed.
    const productFound = cartItems.find(
      (cartItems) => cartItems.id === cartProduct.id
    );

    // return all cart items except those with id that we want to get removed
    const removedItem = cartItems.filter((item) => item.id !== cartProduct.id);
    // update the cartItems
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
  }

  // handle cart quantity of individual existing cartItems
  function handleCartQuantity(id, type) {
    if (type === "inc") {
      // quantities and pricing of existing items will get updated accordingly.
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

        // Return the updated cart items
        return updatedCartItems;
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

        // Return the updated cart items
        return updatedCartItems;
      });
    }
  }

  // handle the quantity of items
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

  // handle searching for products
  const [searchItem, setSearchItem] = useState("");
  const [foundItem, setFoundItem] = useState(productInfo);

  function handleSearch(e) {
    const searchValue = e.target.value;
    // useEffect(() => {
    setSearchItem(searchValue.toLowerCase());

    const productFound = productInfo.filter((product) => {
      console.log(product);
      return (
        searchItem !== "" &&
        product.name.trim().toLowerCase().includes(searchItem)
      );
    });

    setFoundItem(productFound);
    // }, [searchItem, foundItem]);
  }

  // home-page slides context
  // custom slides code
  const slidesDetail = CarousalList();

  // handle the next click
  const handleNext = () => {
    if (slideIndex < slidesDetail.length - 1) {
      setSlideIndex((prevIndex) => prevIndex + 1);
    }

    if (slideIndex === slidesDetail.length - 1) {
      setSlideIndex((prevIndex) => prevIndex - 2);
    }

    return;
  };

  // handle previous click
  const handlePrev = () => {
    if (slideIndex > 0 && slideIndex < slidesDetail.length) {
      setSlideIndex((prevIndex) => prevIndex - 1);
    }

    if (slideIndex === 0) {
      setSlideIndex((prevIndex) => prevIndex + 2);
    }

    return;
  };
  // slides state end

  const stateValue = {
    slideIndex,
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
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartQuantity,
    handleSearch,
    searchItem,
    setSearchItem,
    foundItem,
    cartStatus,
    showCart,
    handleShowCart,
  };

  return (
    <StateContext.Provider value={stateValue}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
