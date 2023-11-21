import hero1 from "../assets/images/desktop-image-hero-1.jpg";
import hero2 from "../assets/images/desktop-image-hero-2.jpg";
import hero3 from "../assets/images/desktop-image-hero-3.jpg";
import darkroom from "../assets/images/image-about-dark.jpg";
import lightroom from "../assets/images/image-about-light.jpg";

export const CategoriesDataProvider = [
  {
    url: "living-room",
    category: "Living Room Furniture",
    imageUrl: hero1,
    className: "relative col-[1/3] row-[1/-1]",
  },
  {
    url: "bed-room",
    category: "Bed Room Furniture",
    imageUrl: hero2,
    className: "relative col-[3/5] row-[1/3]",
  },
  {
    url: "kids-furniture",
    category: "Kid's Furniture",
    imageUrl: hero3,
    className: "relative  col-[5/7] row-[1/3]",
  },
  {
    url: "dining-room",
    category: "Dining Room Furniture",
    imageUrl: darkroom,
    className: "relative col-[3/5] row-[3/5]",
  },
  {
    url: "office-furniture",
    category: "Office Furniture",
    imageUrl: lightroom,
    className: "relative col-[5/7] row-[3/5]",
  },
  {
    url: "entryway",
    category: "Entry-Way & Mud Room Furniture",
    imageUrl: hero2,
    className: "relative col-[7/-1] row-[1/-1]",
  },
];

const CategoriesData = () => {
  return (
    <>
      {CategoriesDataProvider.map((data) => {
        console.log(data);
        <NavLink
          to={`/product/${data.url}}`}
          className="relative col-[1/3] row-[1/-1]"
        >
          <figure className="w-full h-full ">
            <img
              src={data.imageUrl}
              alt="armchair & table furniture"
              className="z-10 object-cover block  max-w-full h-full"
            />
          </figure>
          <figcaption className="category__figcaption">
            {data.category}
          </figcaption>
          <div className="overlay--inner "></div>
        </NavLink>;
      })}
    </>
  );
};

export default CategoriesData;
