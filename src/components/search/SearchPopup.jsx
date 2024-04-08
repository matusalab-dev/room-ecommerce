import { twMerge } from "tailwind-merge";

import { useStateContext } from "../../contexts/StateContext";
import { Overlay } from "../Overlay";

// import IconClose from "../../assets/icons/IconClose";
import SearchResultCount from "./SearchResultCount";

const SearchPopup = ({ toggle, handleClosePopup, inputClass, ...props }) => {
  const { searchItem, foundItem, handleSearch } = useStateContext();

  const InputMerged = twMerge(
    "col-[1/4] self-end peer min-w-[16rem] w-full max-w-3xl pl-4 pr-2 py-2 focus:outline-primary-darkGray rounded-sm focus:border-none focus:outline-offset-0  bg-primary-white focus:border-primary-darkGray border-[1.7px] active:border-primary-darkGray placeholder:text-primary-veryDarkGray placeholder:text-[0.9rem] text-primary-darkGray font-sans placeholder:font-sans font-semibold ",
    inputClass
  );

  return (
    <Overlay
      overlayClass={`${
        toggle ? "lg:grid " : "lg:hidden"
      } hidden  grid-cols-3 grid-rows-2 items-center gap-x-6 gap-y-3`}
    >
      <input
        type="text"
        className={InputMerged}
        name="search"
        placeholder="Looking for products..."
        id="search"
        value={searchItem}
        onChange={handleSearch}
        autoFocus
        {...props}
      />
      {/* trying to find a way to change the BackgroundColor of the IconClose 
          replace it with the "X" character.
      */}
      {/* <IconClose
        onClick={() => handleClosePopup()}
        styleCloseIcon="self-center justify-self-end z-50 col-[4/-1] mr-6 mt-1 xs:mr-0"
        currentColor="white"
      /> */}
      <span
        onClick={() => handleClosePopup()}
        className="self-center justify-self-end z-50 col-[4/-1] cursor-pointer font-secondary font-thin text-xl text-primary-white"
      >
        x
      </span>
      <SearchResultCount
        styleResult=" row-[2/3]  col-span-full  text-primary-white"
        searchItem={searchItem}
        foundItem={foundItem}
      />
    </Overlay>
  );
};

export default SearchPopup;
