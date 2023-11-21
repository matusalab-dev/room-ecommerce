export const BgOverlay = ({ top, left }) => {
  console.log(top, left);
  return (
    <div className={`absolute top-[${top}] left-${left} `}>
      <img
        src="../../public/Logo.svg"
        alt=""
        className={`block max-w-full w-[30rem] -z-10  `}
      />
    </div>
  );
};
