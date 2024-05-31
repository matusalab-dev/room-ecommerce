import { useParams } from "react-router-dom";
import { SHOP_DATA } from "../Data/CategoriesData";
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
    if (title === CategoryTitle) {
      product.push(data[title]);
    }
  }

  return (
    <ProductList
      headingTitle={`${CategoryTitle} Furnitures`}
      headingClass="heading-collection font-normal xs:text-2xl xs:text-3xl"
      // route={`./${productDetail.id}`}
    >
      <ProductItem searchItem={product[0]} />
    </ProductList>
  );
};

export default CategoryPreview;
