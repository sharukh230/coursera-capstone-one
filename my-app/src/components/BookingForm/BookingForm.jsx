import React, { useState } from "react";
import s from "./BookingForm.module.scss";
import { Button } from "../Button";
import dishIcon from "../../assets/svg/dishIcon.svg";
import {
  AccessTime as AccessTimeIcon,
  PersonOutline as PersonOutlineIcon,
  CalendarMonth as CalendarMonthIcon,
} from "@mui/icons-material";
import { SelectOption } from "../SelectOption";
import { fetchAPI } from "../../api/bookingDataAPI";
import { Hidden } from "@mui/material";
import { useEffect } from "react";

const occasionOptions = [
  { value: "Occasion", label: "Occasion", icon: PersonOutlineIcon },
  { value: "Birthday", label: "Birthday", icon: PersonOutlineIcon },
  { value: "Engagement", label: "Engagement", icon: PersonOutlineIcon },
  { value: "Anniversary", label: "Anniversary", icon: PersonOutlineIcon },
];

export const BookingForm = ({ state, dispatch, submitForm }) => {
  const dateNow = new Date(Date.now());
  const dateNowString = dateNow.toISOString().substring(0, 10);
  // const timeNow = `${dateNow.getHours()}:${dateNow.getMinutes()}`;

  const [isValid, setIsValid] = useState({
    date: true,
    time: true,
    guests: true,
    occasion: true,
  });

  // disable button
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (Object.values(isValid).includes(false)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isValid]);

  const displayErrorDate = { display: `${isValid.date ? "none" : "flex"}` };
  const displayErrorGuests = { display: `${isValid.guests ? "none" : "flex"}` };

  const handleChangeDate = (e) => {
    const dateNowNumber = new Date(dateNowString).getTime();
    const maxDate = new Date("2023-12-31").getTime();
    const selectedDateNumber = new Date(e.target.value).getTime();

    if (selectedDateNumber < dateNowNumber || selectedDateNumber > maxDate) {
      setIsValid((prev) => ({ ...prev, date: false }));
    }
    if (selectedDateNumber >= dateNowNumber) {
      setIsValid((prev) => ({ ...prev, date: true }));
    }

    dispatch({ type: "date", payload: e.target.value });
    const date = new Date(e.target.value);
    const availableTimes = fetchAPI(date);
    dispatch({ type: "availableTimes", payload: availableTimes });
    dispatch({ type: "time", payload: availableTimes[0] });
  };

  const handleChange = (e) => {
    const nameSelect = e.target.name;

    if (nameSelect === "time") {
      if (!state.availableTimes.includes(e.target.value)) {
        setIsValid((prev) => ({ ...prev, time: false }));
      } else {
        setIsValid((prev) => ({ ...prev, time: true }));
      }
    }

    if (nameSelect === "guests") {
      if (e.target.value < 1 || e.target.value > 50) {
        setIsValid((prev) => ({ ...prev, guests: false }));
      } else {
        setIsValid((prev) => ({ ...prev, guests: true }));
      }
    }

    if (nameSelect === "occasion") {
      let occasionArr = [];
      occasionOptions.forEach((item) => occasionArr.push(item.value));

      if (!occasionArr.includes(e.target.value)) {
        setIsValid((prev) => ({ ...prev, occasion: false }));
      } else {
        setIsValid((prev) => ({ ...prev, occasion: true }));
      }
    }
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(state);
    // console.log("submitForm", state);
  };

  return (
    <div className={s.container}>
      <h1 style={{ fontSize: "4rem", marginBottom: "3rem" }}>Book Now</h1>
      <form onSubmit={handleSubmit} className={s.formContainer}>
        <div className={s.inputBox}>
          <label htmlFor="res-date">Choose date</label>
          <i>
            <CalendarMonthIcon fontSize="large" />
          </i>
          <input
            type="date"
            name="date"
            id="res-date"
            onChange={handleChangeDate}
            value={state.date}
            min={dateNowString}
            max={"2023-12-31"}
            required
          />
          <div className={`${s.errorBox}`} style={displayErrorDate}>
            Invalid date. Booking is not possible for past dates.
          </div>
        </div>

        <div className={s.inputBox}>
          <label htmlFor="res-time">Choose time</label>
          <i>
            <AccessTimeIcon fontSize="large" />
          </i>
          <select
            id="res-time"
            name="time"
            onChange={handleChange}
            value={state.time}
            required
          >
            {state.availableTimes.map((time) => (
              // BookingSlot ?
              <option data-testid="select-option" key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className={s.inputBox}>
          <label htmlFor="guests">Number of guests</label>
          <i>
            <PersonOutlineIcon fontSize="large" />
          </i>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="50"
            id="guests"
            name="guests"
            onChange={handleChange}
            value={state.guests}
            required
          />
          <div className={`${s.errorBox}`} style={displayErrorGuests}>
            Invalid number of guests. Avalible is an amount from 1 to 50.
          </div>
        </div>

        <div className={s.inputBox}>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={handleChange}
            value={state.occasion}
            required
          >
            {Object.values(occasionOptions).map((optionItem) => (
              <option key={optionItem.value} value={optionItem.value}>
                {optionItem.label}
              </option>
            ))}
          </select>
        </div>
        {/* <SelectOption options={occasionOptions} /> */}
        {/* <input
          className={s.submitBtn}
          type="submit"
          value="Make Your Reservation"
        /> */}
        <button
          aria-label="On Click"
          className={s.submitBtn}
          type="submit"
          // value="Make Your Reservation"
          disabled={isDisabled}
        >
          Make Your Reservation
        </button>
      </form>
    </div>
  );
};