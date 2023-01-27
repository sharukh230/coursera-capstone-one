import React from "react";
import s from "./BtnLink.module.scss";

export const BtnLink = ({ title, icon }) => {
  return (
    <button className={s.btnLink}>
      {title}
      {icon ? <img className={s.icon} src={icon} alt="icon" /> : null}
    </button>
  );
};