import React, { useContext } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { MenuContext } from "../Contexts/MenuContext";
import { CommonNavbar } from "./CommonNavBar";

export const OrderLayout = () => {
  //   const location = useLocation();
  const { id, category } = useParams();
  const menuDetails = useContext(MenuContext);
  // console.log(menuDetails);
  const menu = menuDetails.filter((menuDetail) => menuDetail.id === id);
  //   console.log(location.state.search);
  console.log(id, category);
  console.log(menu[0]);

  // console.log(menuDetails);

  return (
    <>
      <CommonNavbar />
      <div className="custom-container  bg-primary-200 py-5 px-8 h-[calc(100vh-5rem)] text-secondary-300">
        <h2 className="mt-3 mb-7 p-0 text-4xl font-bold ">Orders Details </h2>
        <Outlet context={menu[0]} />
      </div>
    </>
  );
};
