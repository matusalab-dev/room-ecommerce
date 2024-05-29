import { useOutletContext } from "react-router-dom";

import ProductPreviewView from "../components/ui/ProductPreviewView";
import { useLocalStorage } from "../hooks/useStorage";

const ProductDetail = () => {
  const productsDetail = useOutletContext();
  console.log("products-detail", productsDetail);
  // const [productItem, setProductItem] = useLocalStorage("product-item", []);
  // setProductItem((prevProductItem) => prevProductItem);
  // const [age, setAge, removeAge] = useLocalStorage("age", 26);

  // console.log("products in products-detail ", productsDetail);

  {
    /* our product collections section */
  }
  return (
    <ProductPreviewView productDetail={productsDetail} route="../shopping" />
  );
};

export default ProductDetail;
