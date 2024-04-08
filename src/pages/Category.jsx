import { useParams } from "react-router-dom";
import { SHOP_DATA } from "../data/categoriesData";
import ProductList, { ProductItem } from "../components/ProductList";

const CategoryPreview = () => {
  const { category } = useParams();
  // console.log("category-title:", category);
  const CategoryTitle = `${category.toLowerCase()}`;

  const data = SHOP_DATA.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  // console.log("category data:", data);
  let product = [];
  for (const title in data) {
    // console.log("data title", title);
    // console.log("category title", CategoryTitle);
    if (title === CategoryTitle) {
      product.push(data[title]);
      // console.log("product:", product);
    }
  }

  return (
    <ProductList
      headingTitle={`${CategoryTitle}s`}
      headingClass="text-5xl font-thin xs:text-2xl"
      // route={`./${productDetail.id}`}
    >
      <ProductItem searchItem={product[0]} />
    </ProductList>
  );
};

export default CategoryPreview;
