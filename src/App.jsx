import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import { ShopsLayout } from "./layouts/ShopsLayout";
import ProductLayout from "./layouts/ProductLayout";
import { NotFound } from "./pages/NotFound";
import Shops from "./pages/Shops";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}></Route>
        {/* shops Route*/}
        <Route path="shopping" element={<ShopsLayout />}>
          <Route index element={<Shops />} />
        </Route>
        {/* product details */}
        <Route path="shop/:productid" element={<ProductLayout />}>
          <Route index element={<ProductDetail />}></Route>
        </Route>
        {/* product categories*/}
        <Route path="product/:category" element={<ShopsLayout />}>
          <Route index element={<Category />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
