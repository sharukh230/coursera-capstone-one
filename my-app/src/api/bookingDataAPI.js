const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  
  export const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());
    const dateString = date.toISOString().split("T")[0];
  
    let bookingLittleLemon = localStorage.getItem("bookingLittleLemon");
    bookingLittleLemon = JSON.parse(bookingLittleLemon);
  
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
  
    if (bookingLittleLemon && bookingLittleLemon.length >= 1) {
      bookingLittleLemon.forEach((booking) => {
        if (booking.date === dateString) {
          console.log("result before", result);
          result = result.filter((res) => res !== booking.time);
          console.log("result after", result);
        }
      });
    }
  
    return result;
  };
  
  export const submitAPI = function (formData) {
    // Did you update the addition of new booking to the existing data?
    //Did you update the data using local storage?
  
    let bookingLittleLemon = localStorage.getItem("bookingLittleLemon");
    bookingLittleLemon = JSON.parse(bookingLittleLemon);
  
    if (!bookingLittleLemon || bookingLittleLemon.length < 1) {
      const bookingData = [formData];
      localStorage.setItem("bookingLittleLemon", JSON.stringify(bookingData));
    } else {
      const updateBooking = [...bookingLittleLemon, formData];
      localStorage.setItem("bookingLittleLemon", JSON.stringify(updateBooking));
    }
  
    return true;
  };