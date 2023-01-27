import React from "react";
import s from "./Button.module.scss";

export const Button = ({ title, onClick }) => {
  return (
    <button className={s.btnContainer} onClick={onClick}>
      <p className={s.btnTitle}>{title}</p>
    </button>
  );
};