import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useStateContext } from "../Contexts/StateContext";
import { CategoriesDataProvider } from "../data/CategoriesData";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const ProductCategory = () => {
  const { foundItem, searchItem, setSearchItem } = useStateContext();

  useEffect(() => {
    foundItem;
    setSearchItem("");
  }, []);

  return (
    <>
      {searchItem == "" && (
        <section
          className={`mt-12 grid grid-cols-categoryCol  grid-rows-categoryRow gap-4`}
        >
          {CategoriesDataProvider.map((data) => {
            // console.log(data.url);
            return (
              <NavLink
                key={data.url}
                to={`/product/${data.url}`}
                className={data.className}
              >
                <figure className="w-full h-full ">
                  <img
                    src={data.imageUrl}
                    alt="armchair & table furniture"
                    className="z-10 object-cover block  w-full h-full"
                  />
                </figure>
                <figcaption className="category__figcaption ">
                  {data.category}
                </figcaption>
                <div className="overlay--inner "></div>
              </NavLink>
            );
          })}
        </section>
      )}
    </>
  );
};

export default ProductCategory;
