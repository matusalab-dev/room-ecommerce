import { SHOP_DATA } from "./categoriesData";

const categorizedItem = SHOP_DATA.reduce((acc, category) => {
  const { title, items } = category;
  acc[title.toLowerCase()] = items;
  return acc;
}, {});

const data = categorizedItem;

// all products inside available categories
// kitchens category will be added soon
const allProducts = [
  ...data["living room furniture"],
  ...data["bed room furniture"],
  ...data["kid's furniture"],
  ...data["dining room furniture"],
  ...data["office furniture"],
  ...data["entry way furniture"],
];

// console.log(allProducts);
const shoppingProduct = () => allProducts;

export default shoppingProduct;
