import { Navbar } from "../components/Navbar";
import { useStateContext } from "../Contexts/StateContext";

const Header = () => {
  const { index, slidesDetail } = useStateContext();

  return (
    <header className="hero ">
      <Navbar />
      <div className="hero__image">
        <img src={slidesDetail[index].imgUrl} className="hero-image" />
      </div>
    </header>
  );
};

export default Header;
