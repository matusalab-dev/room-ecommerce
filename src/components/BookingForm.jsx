import React, { useReducer } from "react";
import * as yup from "yup";
import { FaUser } from "react-icons/fa";
import { MdRestaurant, MdOutlineCalendarToday, MdAlarm } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import { SubmitAPI, FetchAPI } from "../data/FetchAPI";
import "../App.css";
import useLocalStorage from "../Hooks/useLocalStorage";
import { InputComponent } from "./InputComponent";
import { ButtonEl } from "./ButtonComponent";

const initialState = {
  selectedDate: "",
  availableTimes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return { ...state, selectedDate: action.payload };
    case "UPDATE_TIME":
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
};

export const BookingForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [appstate, setAppState] = useLocalStorage("appState", "");
  const [item, setItem] = useLocalStorage("formState", {});
  const navigate = useNavigate();
  // console.log(`default available time:  ${defaultValue}`);

  console.log(state);
  let firstOption = true;

  function fetchAvailableTimes(date) {
    const availableSlot = FetchAPI(date);
    // const getState = getStateFromStorage("formState");

    console.log(availableSlot[0]);
    const appState = {
      time: availableSlot,
      date: date,
    };

    setAppState(appState);
    // setDefaultValues(availableSlot[0]);
    dispatch({ type: "UPDATE_TIME", payload: availableSlot });
  }

  // date picker triggers the new available times
  // based on the selectedDate
  function handleDateChange(date) {
    const currentDate = new Date(date);

    console.log(currentDate);

    dispatch({ type: "UPDATE_DATE", payload: currentDate });
    fetchAvailableTimes(currentDate);
  }

  // form validation using yup

  // check for the right data-type of the yup form field
  // check the data type for the check-boxes
  const tableSchema = yup.object().shape({
    date: yup.date().required("pick a date"),

    seating: yup.string().required("pick one of our seatings"),
    // occasion: yup.string().required("Required"),
    // resTime: yup.string().required("Required"),
  });

  // Radio input seatingOptions
  const seatingOptions = [
    { key: "Indoor", value: "Indoor" },
    { key: "Outdoor", value: "Outdoor" },
  ];

  const formik = useFormik({
    initialValues: {
      date: "",
      guests: 1,
      seating: "",
      resTime: "",
      occasion: "Engagement",
    },
    // enableReinitialize: true,
    validationSchema: tableSchema,
    onSubmit: (values) => {
      // setPreviousStep(values);
      const previousState = {
        date: values.date,
        guests: values.guests,
        seating: values.seating,
        resTime: values.resTime,
        occasion: values.occasion,
      };
      // const submitBtnState = false;

      const returnVal = SubmitAPI(values);

      if (returnVal) {
        console.log(values);
        setItem(values);
        // console.log(previousStep);
        navigate("CustomerForm", { state: previousState });
        // saveStateToStorage(state, values);

        console.log("submission-status : " + returnVal);
      }
    },
  });
  // setPreviousStep(formik.values);

  console.log("resTime: " + formik.values.resTime);
  // console.log(Date.parse(formik.values.date));
  // console.log(Date.parse(formik.values.date));
  // console.log(FormatDate(Date.parse(formik.values.date)));

  return (
    <>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="mr-auto  flex w-[50rem] max-w-[60rem] space-y-4  flex-col  md:ml-auto md:w-[25rem]"
        >
          <h2 className="mb-10  font-primary  text-6xl text-primary-100">
            Reservations
          </h2>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="flex w-full justify-between md:flex-col"
          >
            <div className="mb-3 flex w-1/2 md:w-[17.5rem]  items-center justify-start md:mb-10 md:justify-between">
              <label
                htmlFor={seatingOptions[0].value}
                className="mr-16 font-secondary text-xl font-semibold text-secondary-300 md:mr-0"
              >
                {seatingOptions[0].key}
              </label>
              <input
                type="radio"
                id={seatingOptions[0].value}
                name="seating"
                value={seatingOptions[0].value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.seating === seatingOptions[0].value}
                // required
                // className=" h-8 w-8"
                className={`form-radio seating ${
                  formik.touched.seating && formik.errors.seating
                    ? "error"
                    : " "
                } `}
              />
            </div>
            <div className="mb-3 flex w-1/2 md:w-[17.5rem] items-center justify-start md:mb-10 md:justify-between">
              <label
                htmlFor={seatingOptions[1].value}
                className={` mr-16 font-secondary text-xl font-semibold text-secondary-300 md:mr-0`}
              >
                {seatingOptions[1].key}
              </label>
              <input
                type="radio"
                id={seatingOptions[1].value}
                name="seating"
                value={seatingOptions[1].value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.seating === seatingOptions[1].value}
                // required
                className={`seating ${
                  formik.touched.seating && formik.errors.seating
                    ? "error"
                    : " "
                }`}
              />
            </div>
          </div>

          <div className=" flex w-full justify-between md:mx-auto md:flex-col md:space-y-5">
            <div className="relative mb-3 w-1/2">
              <MdOutlineCalendarToday
                className={` absolute left-4 top-[4.6rem] text-2xl font-semibold text-primary-200 active:text-primary-200 ${
                  formik.touched.date && formik.errors.date
                    ? " text-red-600 focus:text-primary-200 active:text-primary-200 "
                    : ""
                }
              `}
              />
              <InputComponent
                type="date"
                id="date"
                name="date"
                className={`text-lg  font-bold mt-2 px-14 py-4 w-[17.5rem] text-primary-200 bg-secondary-300 cursor-pointer`}
                touched={formik.touched.date}
                errors={formik.errors.date}
                // value={formik.values.date}
                LabelClass="mr-0"
                label="Date"
                onChange={(e) => {
                  handleDateChange(e.target.value);
                  formik.setFieldValue("date", e.target.value);
                }}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="relative mb-3 w-1/2">
              <FaUser className="absolute left-4 top-[4.4rem] text-2xl font-semibold text-primary-200" />

              <InputComponent
                type="number"
                className="w-[17.5rem] mt-2 cursor-pointer rounded-[0.19rem]  bg-secondary-300 py-[0.8rem] pl-24 pr-8 font-secondary text-lg font-semibold text-primary-200 outline-8 outline-red-600"
                name="guests"
                label="Number of Dinners"
                LabelClass="mr-0"
                id="guests"
                min={1}
                max={10}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.guests}
              />
            </div>
          </div>
          <div className="mt-4 flex w-full justify-between md:flex-col md:space-y-5">
            <div className="relative mb-3 w-1/2">
              <label
                htmlFor="occasion"
                className="mb-2 block font-semibold text-secondary-300"
              >
                <MdRestaurant className="absolute bottom-4 left-4 z-30 text-2xl font-semibold  text-primary-200" />
                Occasion
              </label>
              <select
                id="occasion"
                className={` group relative flex w-[17.5rem] cursor-pointer rounded-md  bg-secondary-300 px-6 py-4 text-center font-secondary  text-lg font-semibold text-primary-200`}
                onChange={formik.handleChange}
                value={formik.values.occasion}
                defaultValue={formik.values.occasion}
              >
                <option className="  w-[19.5rem] py-16 pl-8">Engagement</option>
                <option className="mt-5 w-[19.5rem] ">Birthday</option>
                <option className="mt-5 w-[19.5rem] p-10">Anniversary</option>
              </select>
            </div>
            <div className="relative mb-3 w-1/2">
              <label
                htmlFor="resTime"
                className="mb-2 block font-semibold text-secondary-300"
              >
                <MdAlarm className="absolute left-4 top-12 z-20 text-2xl font-semibold text-primary-200" />
                Choose Time
              </label>

              <select
                id="resTime"
                name="resTime"
                className="group relative w-[17.5rem] cursor-pointer rounded-md bg-secondary-300 px-6 py-4 text-center font-secondary  text-lg font-semibold text-primary-200"
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.resTime}
                // defaultValue={formik.values.resTime}
              >
                {state.availableTimes.map(function (time, index) {
                  if (firstOption) {
                    return (
                      <option className="mt-5 w-[300px]  selected " key={index}>
                        {time}
                      </option>
                    );
                  } else {
                    firstOption = false;
                    return (
                      <option className="mt-5 w-[300px] " key={index}>
                        {time}
                      </option>
                    );
                  }
                })}
              </select>
            </div>
          </div>
          <div className="  flex w-full justify-between  md:w-[17.5rem] ">
            <ButtonEl
              type="submit"
              label="Reserve a Table"
              className="mt-12 w-[17.5rem]"
              disabled={!formik.isValid || formik.isSubmitting}
            />
          </div>
        </form>
      </FormikProvider>
    </>
  );
};
