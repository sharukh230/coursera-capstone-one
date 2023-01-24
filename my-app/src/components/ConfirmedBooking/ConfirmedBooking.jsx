import React from "react";
import s from "./ConfirmedBooking.module.scss";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const ConfirmedBooking = () => {
  const navigate = useNavigate();
  return (
    <div className="widthContainer">
      <h3 className={s.confirmedTitle}>Booking is Confirmed</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "10rem",
        }}
      >
        <Button title="Return to Home" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};