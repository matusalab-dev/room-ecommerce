import { useOutletContext } from "react-router-dom";

import ProductPreviewView from "../components/ui/ProductPreviewView";

const ProductDetail = () => {
  const productsDetail = useOutletContext();

  // console.log("products in products-detail ", productsDetail);

  {
    /* our product collections section */
  }
  return (
    <ProductPreviewView productDetail={productsDetail} route="../shopping" />
  );
};

export default ProductDetail;
