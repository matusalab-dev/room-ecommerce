import { twMerge } from "tailwind-merge";
import aboutDark from "../assets/images/image-about-dark.jpg";
import aboutLight from "../assets/images/image-about-light.jpg";

// <!-- Footer section -->
const Footer = ({ className }) => {
  const mergedClass = twMerge("about", className);
  return (
    <footer className={mergedClass} id="about">
      <div className="about__image--1">
        <img
          src={aboutDark}
          alt=""
          className="about__image--inner about__inner-image--1"
        />
      </div>
      <article className="about__us">
        <h2 className="heading heading--secondary">About our furniture</h2>
        <p className="description about__description xs:font-thin">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <div className="about__image--2">
        <img
          src={aboutLight}
          alt=""
          className="about__image--inner about__inner-image--2"
        />
      </div>
      {/* <div className="attribution col-[1/span-full] w-full  ">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="ml-1"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Matusalab</a>.
      </div> */}
    </footer>
  );
};

export default Footer;
