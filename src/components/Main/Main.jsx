import React from "react";
import s from "./Main.module.scss";
import { useReducer } from "react";
import { BookingForm } from "../BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../../api/bookingDataAPI";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.payload,
  };
};

const dateNow = new Date(Date.now());
const dateString = dateNow.toISOString().substring(0, 10);
const availableTimes = fetchAPI(dateNow);

export const initialState = {
  date: dateString,
  availableTimes: availableTimes,
  time: availableTimes[0],
  guests: 2,
  occasion: "Occasion",
};

export const Main = () => {
  const navigate = useNavigate();

  // const [initState, setInitState] = useState(initialState);

  // useEffect(() => {
  //   setInitState({
  //     date: dateString,
  //     availableTimes: fetchAPI(dateNow),
  //     time: availableTimes[0],
  //     guests: 2,
  //     occasion: "Occasion",
  //   });
  // }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const submitForm = (state) => {
    const response = submitAPI(state);
    dispatch({ type: "date", payload: state.date });

    if (response === true) navigate("/confirmed-booking");
  };

  return (
    <div className="widthContainer">
      <div className={s.container}>
        {/* <h1 style={{ fontSize: "4rem", marginBottom: "3rem" }}>
          Reservation details
        </h1> */}
        <BookingForm
          state={state}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};