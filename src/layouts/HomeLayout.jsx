import Footer from "./Footer";
import Header from "./Header";
import Slides from "../layouts/Slides";
import useToggle from "../Hooks/useToggle";

export const HomeLayout = () => {
  return (
    <>
      {/* homepage  */}
      <main className="main">
        {/* header section of home-page */}
        <Header />

        {/* products section of home-page*/}
        <Slides />

        {/* <!-- footer section --> */}
        <Footer />
      </main>
    </>
  );
};
