import { NavLink } from "react-router-dom";

import { useStateContext } from "../contexts/StateContext";

import IconArrow from "../assets/icons/IconArrow";
import IconRight from "../assets/icons/IconRight";
import IconLeft from "../assets/icons/IconLeft";

const Slides = () => {
  const { slideIndex, slidesDetail, handleNext, handlePrev } =
    useStateContext();

  // Display products slides
  return (
    <>
      <section className="product__details">
        <h2 className="heading heading--primary">
          {slidesDetail[slideIndex].heading}
        </h2>
        <p className="description product__description">
          {slidesDetail[slideIndex].description}
        </p>
        <NavLink to="/shopping" className="cta-primary">
          Shop now
          <IconArrow />
        </NavLink>
      </section>
      {/* wrapper for the next and prev buttons of the slide  --> */}
      <div className="btn__wrapper--desktop ">
        <button
          className="btn"
          onClick={handlePrev}
          data-message="go back to the previous slide"
        >
          <IconLeft />
        </button>
        <button
          className="btn"
          onClick={handleNext}
          data-message="go to the next slide"
        >
          <IconRight />
        </button>
      </div>
    </>
  );
};

export default Slides;
