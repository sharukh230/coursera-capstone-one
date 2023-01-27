import React from "react";
import s from "./TestimonialCard.module.scss";
import Rating from "@mui/material/Rating";

export const TestimonialCard = ({ item }) => {
  const { name, photo, rating, review } = item;
  return (
    <div className={s.cardBox}>
      <Rating name="rating" defaultValue={rating} precision={0.5} readOnly />
      <div className={s.profile}>
        <img className={s.profileImg} src={photo} alt="Profile" />
        <p>{name}</p>
      </div>
      <p className={s.reviewText}>{review}</p>
    </div>
  );
};