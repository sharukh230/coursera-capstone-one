import React from "react";
import s from "./ErrorPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="widthContainer">
      <h3 className={s.confirmedTitle}>
        This page is under construction. <br />
        Please come back later.
      </h3>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Button title="Return to Home" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};