import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useStateContext } from "../contexts/StateContext";
import { SHOP_DATA } from "../data/categoriesData";

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
          className={`mt-12 grid grid-cols-categoryCol  grid-rows-categoryRow gap-4 overflow-x-scroll`}
        >
          {SHOP_DATA.map((data) => {
            return (
              <NavLink
                key={data.title}
                to={`./product-category/${data.title}`}
                className={
                  data.className +
                  " " +
                  "lg:relative lg:col-span-2 lg:row-span-full lg:min-w-[10rem] "
                }
              >
                <figure className="w-full h-full ">
                  <img
                    src={data.backgroundImage}
                    alt={`${data.title} category`}
                    className="z-10 object-cover block  w-full h-full"
                  />
                </figure>
                <figcaption className="category__figcaption drop-shadow-sm  shadow-black">
                  {data.title}
                  <span className=" text-base font-thin">
                    ({data.items.length})
                  </span>
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
