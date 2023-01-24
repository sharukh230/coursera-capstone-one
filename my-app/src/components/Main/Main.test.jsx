import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Main, initialState } from "./Main";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const MockForm = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

// function renderWithRouter(
//   ui,
//   { route = "/", history = createHistory(createMemorySource(route)) } = {}
// ) {
//   return {
//     ...render(
//       <BrowserRouter>
//         <LocationProvider history={history}>{ui}</LocationProvider>
//       </BrowserRouter>
//     ),
//     // adding `history` to the returned utilities to allow us
//     // to reference it in our tests (just try to avoid using
//     // this to test implementation details).
//     history,
//   };
// }

describe("Check out a behavior of Reducer and state", () => {
  test("initializeTimes returns the correct options list.", () => {
    render(<MockForm />);

    const labelChooseTime = screen.getByLabelText("Choose time");
    expect(labelChooseTime).toHaveValue(initialState.availableTimes[0]);

    fireEvent.click(labelChooseTime);
    initialState.availableTimes.map((time) => {
      const timeOption = screen.getByText(time);
      return expect(timeOption).toBeInTheDocument();
    });
  });

  test("choose Date and change Time available options", () => {
    render(<MockForm />);

    const labelChooseDate = screen.getByLabelText("Choose date");

    const dateNow = new Date("2023-02-02");
    const dateString = dateNow.toISOString().substring(0, 10);
    fireEvent.change(labelChooseDate, { target: { value: dateString } });

    const labelChooseTime = screen.getByLabelText("Choose time");
    fireEvent.click(labelChooseTime);

    // For testing purposes, the fetchAPI function will return a non-empty array of available booking times.
    const options = screen.getAllByTestId("select-option");
    expect(options.length).not.toBe(0);
  });

  test("after fill form and click a booking button check Local Storage has value", async () => {
    // after booking certain time, it's not more availible in the time option list
    render(<MockForm />);
    // const {
    //   container,
    //   history: { navigate },
    // } = renderWithRouter(<Main />);

    const labelChooseDate = screen.getByLabelText("Choose date");
    const dateNow = new Date("2023-02-02");
    const dateString = dateNow.toISOString().substring(0, 10);
    fireEvent.change(labelChooseDate, { target: { value: dateString } });

    const labelChooseTime = screen.getByLabelText("Choose time");
    let selectedTime = screen.getByText(labelChooseTime.value);
    fireEvent.click(selectedTime);

    // const btnSubmit = screen.getByRole("button", {
    //   name: /make your reservation/i,
    // });

    const btnSubmit = screen.getByRole("button");
    expect(btnSubmit).not.toBeDisabled();
    fireEvent.click(btnSubmit);

    // const formValue = screen.getByRole("form");

    // Did you write the unit tests for writing to local storage in React?
    expect(JSON.parse(localStorage.getItem("bookingLittleLemon")).length).toBe(
      1
    );
    // Did you write the unit tests for reading from the local storage in React?

    // expect(container.innerHTML).toMatch(/booking is confirmed/i);

    // expect(history.location.pathname).toBe("/confirmed-booking");

    // expect(navigate).toHaveBeenCalledTimes(1);
    // expect(navigate).toHaveBeenCalledWith("/confirmed-booking");

    // await reachRouterNavigate("/confirmed-booking");
    // const confirmationText = await screen.findByText(/booking is confirmed/i);
    // expect(confirmationText).toBeInTheDocument();

    // For testing purposes, the fetchAPI function will return a non-empty array of available booking times.

    // initialState.availableTimes.slice(1, 3).map((time) => {
    //   const timeOption = screen.getByText(time);
    //   return expect(timeOption).toBeInTheDocument();
    // });
  });
});