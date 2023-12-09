import { NavLink } from "react-router-dom";
import { useStateContext } from "../Contexts/StateContext";
import iconLeft from "../assets/images/icon-angle-left.svg";
import iconRight from "../assets/images/icon-angle-right.svg";
import primaryArrow from "../assets/images/icon-arrow.svg";

const Slides = () => {
  const { index, slidesDetail, handleNext, handlePrev } = useStateContext();

  return (
    // product details section
    <>
      <section className="product__details">
        <h2 className="heading heading--primary">
          {slidesDetail[index].heading}
        </h2>
        <p className="description product__description">
          {slidesDetail[index].description}
        </p>
        <NavLink to="/shopping" className="cta-primary">
          Shop now
          <span>
            <img
              src={primaryArrow}
              alt="go to shopping "
              className="arrow-primary"
            />
          </span>
        </NavLink>
      </section>
      {/* <!-- // next and prev button for the carousal  --> */}
      <div className="btn__wrapper--desktop ">
        <button className="btn" onClick={handlePrev}>
          <img src={iconLeft} alt="" />
        </button>
        <button className="btn" onClick={handleNext}>
          <img src={iconRight} alt="" />
        </button>
      </div>
    </>
  );
};

export default Slides;
