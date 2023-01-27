import React from "react";
import s from "./Testimonials.module.scss";
import { TestimonialCard } from "../TestimonialCard";
import { useFetchItems } from "../../hooks/useFetchItems";
import { getTestimonials } from "../../service/testimonials.service";

export const Testimonials = () => {
  const items = useFetchItems(getTestimonials);

  if (!items || items.length === 0) {
    return null;
  }
  return (
    <section className={s.backColor}>
      <div className="widthContainer">
        <div className={s.contentBox}>
          <h3>Testimonials</h3>
          <div className={s.grid4col}>
            {items.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className={s.backColor}></div>
    </section>
  );
};