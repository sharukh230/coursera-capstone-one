import img01 from "../assets/img/profiles/profile1.png";
import img02 from "../assets/img/profiles/profile2.png";
import img03 from "../assets/img/profiles/profile3.png";
import img04 from "../assets/img/profiles/profile4.png";

export const getTestimonials = async () =>
  await [
    {
      id: "01",
      name: "Michael Hart",
      photo: img01,
      rating: 4.5,
      review:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "02",
      name: "John Smith",
      photo: img02,
      rating: 4,
      review:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "03",
      name: "Amy Cruz",
      photo: img03,
      rating: 5,
      review:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "04",
      name: "Jessica Bates",
      photo: img04,
      rating: 4,
      review:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
  ];