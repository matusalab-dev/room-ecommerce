import Footer from "./Footer";
import Slides from "../pages/Slides";
import Header from "./Header";

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
      {/* <Outlet /> */}
    </>
  );
};
