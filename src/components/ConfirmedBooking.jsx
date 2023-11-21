import { FormatDate } from "../utils/FormatDate";
import { useLocation } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

const ConfirmedBooking = () => {
  const values = useLocation();
  const [month, day] = FormatDate(values.state.date);

  return (
    <div className="custom-container flex h-60  flex-col items-center justify-center bg-primary-200 p-8 text-left text-lg font-semibold text-primary-100 sm:w-full sm:items-start sm:p-3 ">
      <div className="mx-auto flex max-w-[30rem] flex-col items-center space-y-2">
        <MdCheckCircle className=" text-center text-5xl" />
        <h2 className="block max-w-[35ch] self-center text-2xl font-bold   md:text-xl">
          Your reservation has been confirmed!
        </h2>
        <p className="md:font-normal">
          your table is reserved for {`${month}, ${day}.`}
        </p>
        <p className="mt-4 text-center">Please check your email.</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
