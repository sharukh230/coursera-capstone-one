import React from "react";
import s from "./Chicago.module.scss";
import img01 from "../../assets/img/restaurant chef B.jpg";
import img02 from "../../assets/img/restaurant.jpg";

export const Chicago = () => {
  return (
    <section className="widthContainer">
      <div className={s.aboutContainer}>
        <div className={s.textContainer}>
          <h2 className={s.h2Title}>Little Lemon</h2>
          <h3 className={s.h3Title}>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className={s.imagesBox}>
          <img className={s.imgOne} src={img01} alt="Restaurant" />
          <img className={s.imgTwo} src={img02} alt="Restaurant" />
        </div>
      </div>
    </section>
  );
};