import React from "react";
import s from "./ProductCard.module.scss";
import { BtnLink } from "../BtnLink/BtnLink";
import iconScooter from "../../assets/svg/scooter.svg";

export const ProductCard = ({ item }) => {
  const { title, price, img, text } = item;

  return (
    <>
      <div className={s.cardContainer}>
        <img className={s.imgCard} src={img} alt="Greek salad" />

        <div className={s.textContainer}>
          <div className={s.cardHeader}>
            <p className={s.cardTitle}>{title}</p>
            <span className={s.price}>${price.toFixed(2)}</span>
          </div>
          <p className={s.description}>{text}</p>
          <div>
            <BtnLink title="Order a delivery" icon={iconScooter} />
          </div>
        </div>
      </div>
    </>
  );
};