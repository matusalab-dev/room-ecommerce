import { useParams } from "react-router-dom";
import { CategoriesDataProvider } from "../data/CategoriesData";

const Category = () => {
  const { category } = useParams();
  console.log(category);
  const filteredCategory = CategoriesDataProvider.filter(
    (data) => data.url === category
  );

  console.log(filteredCategory);
  return (
    <h2 className="text-sm mb-40 text-primary-darkGray mt-12">
      {filteredCategory[0].category}
      <div className="max-w-1/3 h-20 w-1/4 mt-6">
        <img src={filteredCategory[0].imageUrl} alt="" />
      </div>
    </h2>
  );
};

export default Category;
