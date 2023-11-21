import { v4 as uuid } from "uuid";
import hero1 from "../assets/images/desktop-image-hero-1.jpg";
import hero2 from "../assets/images/desktop-image-hero-2.jpg";
import hero3 from "../assets/images/desktop-image-hero-3.jpg";
import darkRoom from "../assets/images/image-about-dark.jpg";
import lightRoom from "../assets/images/image-about-light.jpg";

//shopping productDetails context
const productsDetail = [
  {
    id: uuid(),
    imageUrl: hero1,
    imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],
    name: "Fancy chair",
    url: "living-room",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    price: 300,
    statusBadge: "New",
    quantity: 1,
    inCart: false,
  },
  {
    id: uuid(),
    imageUrl: hero2,
    imageVariants: [hero2, hero1, hero3, lightRoom, darkRoom],

    name: "outdoor arm-less chair",
    url: "bed-room",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    price: 1422.99,
    statusBadge: "New",
    quantity: 1,
    inCart: false,
  },
  {
    id: uuid(),
    imageUrl: hero3,
    imageVariants: [hero3, hero2, hero1, lightRoom, darkRoom],

    name: "office arm chair",
    url: "entryway",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    price: 2300.99,
    statusBadge: "New",
    quantity: 1,
    inCart: false,
  },
  {
    id: uuid(),
    imageUrl: lightRoom,
    imageVariants: [lightRoom, hero1, hero2, hero3, darkRoom],

    name: "comfortable sofa",
    url: "kids-furniture",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    price: 1200.99,
    statusBadge: "New",
    quantity: 1,
    inCart: false,
  },
  {
    id: uuid(),
    imageUrl: darkRoom,
    imageVariants: [darkRoom, hero1, hero2, hero3, lightRoom],

    name: "arm-less chair",
    url: "Dinning-room",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    price: 2200.99,
    statusBadge: "New",
    quantity: 1,
    inCart: false,
  },
  {
    id: uuid(),
    imageUrl: hero3,
    imageVariants: [hero3, hero1, hero2, lightRoom, darkRoom],

    name: "outdoor chair",
    url: "office-room",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    price: 100,
    statusBadge: "New",
    quantity: 1,
    inCart: false,
  },
  {
    id: uuid(),
    imageUrl: hero1,
    imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

    name: "office arm chair",
    url: "entryway",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    price: 2300.99,
    statusBadge: "New",
    quantity: 1,
    inCart: false,
  },
  {
    id: uuid(),
    imageUrl: darkRoom,
    imageVariants: [darkRoom, hero1, hero2, hero3, lightRoom],

    name: "arm-less chair",
    url: "Dinning-room",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    price: 2200.99,
    statusBadge: "New",
    quantity: 1,
    inCart: false,
  },
];

const shoppingProduct = () => {
  return productsDetail;
};

export default shoppingProduct;
