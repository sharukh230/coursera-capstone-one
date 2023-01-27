import img01 from "../assets/img/greek salad.jpg";
import img02 from "../assets/img/bruchetta.jpg";
import img03 from "../assets/img/lemon dessert.jpg";

export const getProducts = async () =>
  await [
    {
      id: "01",
      title: "Greek Salad",
      price: 12.99,
      img: img01,
      text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "02",
      title: "Bruchetta",
      price: 5.99,
      img: img02,
      text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      id: "03",
      title: "Lemon Dessert",
      price: 5.0,
      img: img03,
      text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];