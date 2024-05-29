import { Routes, Route } from "react-router-dom";

import { HomeLayout } from "./layouts/HomeLayout";
import { ShopsLayout } from "./layouts/ShopsLayout";
import ProductLayout from "./layouts/ProductLayout";

import Shops from "./pages/Shops";
import ProductDetail from "./pages/ProductDetail";
import ProductPreview from "./pages/ProductPreview";
import Category from "./pages/Category";
import { NotFound } from "./pages/NotFound";

import "./App.css";
import "./index.css";

export default function App() {
  return (
    <>
      <Routes>
        {/* Home-page route */}
        <Route path="/" element={<HomeLayout />}></Route>

        {/* shops page Route*/}
        <Route path="shopping/" element={<ShopsLayout />}>
          <Route index element={<Shops />} />
          {/* <Route path=":productid" element={<ProductDetail />}></Route> */}
        </Route>

        {/* product details page route with different shared-layout*/}
        <Route path="shopping/:productid" element={<ProductLayout />}>
          <Route index element={<ProductDetail />}></Route>
        </Route>

        {/*Refactored product categories page route*/}
        <Route
          path="shopping/product-category/:category/"
          element={<ShopsLayout />}
        >
          <Route index element={<Category />}></Route>
          <Route path=":productid" element={<ProductPreview />}></Route>
        </Route>

        {/* if the route doesn't match to the above routes, redirect user to the 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
