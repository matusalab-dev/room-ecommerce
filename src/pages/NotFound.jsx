import { Link, NavLink } from "react-router-dom";
import { ShopsNavbar } from "../components/ShopsNavbar";
import blackLogo from "../assets/images/logo-black.svg";
// export const NotFound = () => {
//   return (
//     <div className="text-primary-200 custom-container h-screen bg-secondary-300 flex items-start md:flex-col md:items-center md:justify-center justify-start ">
//       <Link to="/">
//         {" "}
//         <img
//           src="../../public/Logo.svg"
//           alt="Little lemon "
//           width="250px"
//           className="lg:ml-0 ml-8 mt-8 "
//         />
//       </Link>
//       <div className="flex space-y-12  flex-col justify-center md:justify-center -mt-10 h-screen">
//         <h2 className="text-center font-semibold text-6xl ">COMMING SOON!</h2>
//         <NavLink to="/" className="text-2xl self-center text-center">
//           please go back to Home
//         </NavLink>
//       </div>
//     </div>
//   );
// };

export const NotFound = () => {
  return (
    <section className="custom-container px-2 py-12 text-left  md:text-center">
      {/* <Link to="/">
        <img
          src={blackLogo}
          alt="Room Furniture"
          width="70px"
          className="md:ml-6  mt-8 object-cover max-w-full max-h-full"
        />
      </Link> */}
      <ShopsNavbar />
      <div className="mt-16">
        <h1 className="mb-3 text-4xl font-bold text-gray-900 text sm:text-3xl md:text-5xl md:leading-tight md:font-extrabold">
          Coming Soon!
        </h1>
        <p className="mb-6 text-sm md:text-center font-thin text-primary-200 md:text-xl md:leading-normal">
          Stay tuned for more updates.
        </p>
      </div>
    </section>
  );
};
