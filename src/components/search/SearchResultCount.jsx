import { twMerge } from "tailwind-merge";

const SearchResultCount = ({ styleResult, searchItem, foundItem }) => {
  const mergedClass = twMerge(
    "font-secondary text-lg font-thin sm:text-sm text-primary-veryDarkGray text-left",
    styleResult
  );

  return (
    <>
      {searchItem !== "" && (
        <p className={mergedClass}>
          {`Search Results Found: ${foundItem.length}`}
        </p>
      )}
    </>
  );
};

export default SearchResultCount;
