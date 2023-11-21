import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./Contexts/StateContext";
import App from "./App";
import "./App.css";
import "./index.css";
// import { CartProvider } from "./Contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        {/* <CartProvider> */}
        <App />
        {/* </CartProvider> */}
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);
