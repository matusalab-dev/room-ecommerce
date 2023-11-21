import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import iconClose from "../assets/images/icon-close.svg";
import { NavHashList, NavLinkList } from "../components/NavList";
import { twMerge } from "tailwind-merge";

// nav__list for home pages
export const NavList = ({ className }) => {
  const classMerged = twMerge("nav-list", className);

  return (
    <ul className="nav__list flex gap-6 ">
      <NavLinkList link="/" title="home" className={classMerged}></NavLinkList>
      <NavLinkList
        link="shopping"
        title="shop"
        className={classMerged}
      ></NavLinkList>
      <NavHashList
        href="#about"
        title="about"
        className={classMerged}
      ></NavHashList>
      <NavHashList
        href="#about"
        title="contact"
        className={classMerged}
      ></NavHashList>
    </ul>
  );
};

// nav__list for shopping pages
export const NavListShop = ({ className }) => {
  const classMerged = twMerge("nav__link--shop", className);

  return (
    <ul className="nav__list flex gap-6 ">
      <NavLinkList link="/" title="home" className={classMerged}></NavLinkList>
      <NavLinkList
        link="/shopping"
        title="shop"
        className={classMerged}
      ></NavLinkList>
      {/* <NavHashList
        href="#about"
        title="about"
        className={classMerged}
      ></NavHashList> */}
      <NavHashList
        href="#about"
        title="about"
        className={classMerged}
      ></NavHashList>
      <NavHashList
        href="#contact"
        title="contact"
        className={classMerged}
      ></NavHashList>
    </ul>
  );
};

export const Navbar = ({ className = "" }) => {
  const [toggle, setToggle] = useState(false);

  console.log("outside useEffect", toggle);

  return (
    <>
      {/* <!-- the  left section of the desktop design --> */}
      <nav className={`${className} nav nav-desktop flex`}>
        <NavLink to="/" className="logo">
          <img src={logo} alt="room logo" />
        </NavLink>

        {/* // nav-list */}
        <NavList className="text-primary-white" />
      </nav>

      {/* <!-- Mobile-navigation --> */}
      <nav
        className={`${
          toggle ? "show-mobile" : "hide-mobile"
        } ${className} nav-mobile  hide  `}
      >
        {/* <!-- <a href="#" class="close">x</a> --> */}
        <figure>
          <img
            src={iconClose}
            alt="icon-close"
            className="close"
            onClick={() => setToggle(!toggle)}
          />
        </figure>

        {/* // nav-list */}
        <NavList />
      </nav>

      <nav
        className={`${
          toggle ? "hide-mobile" : "show-mobile"
        } ${className} hide icon-hamburger--wrapper`}
        id="hamburger-menu"
      >
        <div className="hamburger" onClick={() => setToggle(!toggle)}>
          <span className="bar"></span>
          <span className="bar bar--2"></span>
          <span className="bar"></span>
        </div>
        <NavLink to="/" className="mobile-logo">
          <img src={logo} alt="room logo" />
        </NavLink>
      </nav>
    </>
  );
};
