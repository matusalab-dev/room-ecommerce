import { FaChevronDown, FaUser, FaUserCircle, FaUserAlt } from "react-icons/fa";

export const GridSlot = ({ NumberOfSlot, colNumber, label, value, icon }) => {
  console.log(colNumber);
  console.log(NumberOfSlot);

  function slot(NumberOfSlot, colNumber) {
    const SlotList = NumberOfSlot.map((slotNum) => {
      if (colNumber === 2) {
        return (
          <>
            <ul className="option_list flex border-slate-300 border-b-2">
              <li className="option rounded-t-m borderColor  flex w-full border-slate-300 border-r-2 bg-secondary-300 px-7 py-5 text-lg font-bold text-primary-200">
                {slotNum[0]}
              </li>
              <li className="option  w-full bg-secondary-300 px-7 py-5 text-lg font-bold text-primary-200">
                {slotNum[1]}
              </li>
            </ul>
          </>
        );
      } else if (colNumber === 1) {
        return (
          <>
            <ul className="option_list flex border-slate-300 border-b-2">
              <li className="option rounded-t-m borderColor  flex w-full border-slate-300 border-r-2 bg-secondary-300 px-7 py-5 text-lg font-bold text-primary-200">
                {slotNum}
              </li>
            </ul>
          </>
        );
      }
    });

    return SlotList;
  }

  return (
    <div class="mb-3">
      <label
        htmlFor="dinners"
        class="form-label mb-2 block  font-semibold text-secondary-300"
      >
        {/* Number of Dinners */}
        {label}
      </label>
      <div className="options  group relative w-[320px] cursor-pointer rounded-md bg-secondary-300 px-6  py-4 text-center text-primary-200">
        {icon}
        <span className=" font-secondary text-lg font-semibold ">
          {/* No. of Dinners */}
          {value}
        </span>
        <FaChevronDown className="absolute right-4 top-[1.35rem]  text-2xl  font-semibold text-primary-200 group-hover:rotate-180" />
        <div className="option__stack absolute left-0  z-10  mt-5 hidden w-[300px] flex-col group-hover:flex">
          {slot(NumberOfSlot, colNumber)}
        </div>
      </div>
    </div>
  );
};
