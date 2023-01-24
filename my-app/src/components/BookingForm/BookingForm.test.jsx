import { fireEvent, render, screen } from "@testing-library/react";
import { Main } from "../Main";
import { BrowserRouter as Router } from "react-router-dom";

const MockForm = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

describe("Renders Input Labels and Default Values correct", () => {
  test("Renders the  heading and four labels", () => {
    render(<MockForm />);

    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();

    const labelChooseDate = screen.getByLabelText("Choose date");
    expect(labelChooseDate).toBeInTheDocument();

    const labelChooseTime = screen.getByLabelText("Choose time");
    expect(labelChooseTime).toBeInTheDocument();

    const labelNumberGuests = screen.getByLabelText("Number of guests");
    expect(labelNumberGuests).toBeInTheDocument();

    const labelOccasion = screen.getByLabelText("Occasion");
    expect(labelOccasion).toBeInTheDocument();
  });

  test("Date Input field has Today Date as a default value", () => {
    render(<MockForm />);

    const dateNow = new Date(Date.now());
    const dateString = dateNow.toISOString().substring(0, 10);

    const labelChooseDate = screen.getByLabelText("Choose date");

    expect(labelChooseDate).toHaveValue(dateString);
  });

  test("Inputs 'Number of guests' and 'Occasion' have correct default values", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Number of guests");
    expect(labelNumberGuests).toHaveValue(2);

    const labelOccasion = screen.getByLabelText("Occasion");
    expect(labelOccasion).toHaveValue("Occasion");
  });

  // test("default disabled button", () => {
  //   expect(screen.getByRole("button")).toBeDisabled();
  // });
});

describe("Validate that the correct attributes are applied", () => {
  test("Date Input has the correct validation attributes", () => {
    render(<MockForm />);

    const labelChooseDate = screen.getByLabelText("Choose date");

    const dateNow = new Date(Date.now());
    const dateNowString = dateNow.toISOString().substring(0, 10);

    expect(labelChooseDate.getAttribute("min")).toEqual(dateNowString);
    expect(labelChooseDate.getAttribute("max")).toEqual("2023-12-31");

    expect(labelChooseDate.getAttribute("required")).toEqual("");
  });

  test("Time Input has the correct validation attributes", () => {
    render(<MockForm />);

    const labelChooseTime = screen.getByLabelText("Choose time");
    expect(labelChooseTime.getAttribute("required")).toEqual("");
  });

  test("Guests Input has the correct validation attributes", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Number of guests");

    expect(labelNumberGuests.getAttribute("required")).toEqual("");
    expect(labelNumberGuests.getAttribute("min")).toEqual("1");
    expect(labelNumberGuests.getAttribute("max")).toEqual("50");
  });

  test("Occasion Input has the correct validation attributes", () => {
    render(<MockForm />);

    const labelOccasion = screen.getByLabelText("Occasion");

    expect(labelOccasion.getAttribute("required")).toEqual("");
  });

  test("Date validation function appears 'invalid date' message", () => {
    render(<MockForm />);

    const labelChooseDate = screen.getByLabelText("Choose date");

    let selectedDate = new Date("2023-01-01");
    selectedDate = selectedDate.toISOString().substring(0, 10);

    fireEvent.change(labelChooseDate, { target: { value: selectedDate } });

    const errorMessage = screen.getByText(/invalid date/i);
    expect(errorMessage).toBeVisible();

    // selectedDate = new Date("2024-02-01");
    // selectedDate = selectedDate.toISOString().substring(0, 10);

    // fireEvent.change(labelChooseDate, { target: { value: selectedDate } });

    // const errorMessage2 = screen.getByText(/invalid date/i);
    // expect(errorMessage2).toBeVisible();
  });

  test("Date validation function with valid input don't show error message", () => {
    render(<MockForm />);

    const labelChooseDate = screen.getByLabelText("Choose date");

    let selectedDate = new Date("2023-05-10");
    selectedDate = selectedDate.toISOString().substring(0, 10);

    fireEvent.change(labelChooseDate, { target: { value: selectedDate } });

    const errorMessage = screen.getByText(/invalid date/i);
    expect(errorMessage).not.toBeVisible();
  });

  test("Guests validation function with valid input don't show error message", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Number of guests");

    fireEvent.change(labelNumberGuests, { target: { value: "2" } });

    const errorMessage = screen.getByText(/invalid number of guests/i);
    expect(errorMessage).not.toBeVisible();
  });

  test("Guests validation function: put invalid input '0'", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Number of guests");

    fireEvent.change(labelNumberGuests, { target: { value: "0" } });

    const errorMessage = screen.getByText(/invalid number of guests/i);
    expect(errorMessage).toBeVisible();
  });

  test("Guests validation function: put invalid input '51'", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Number of guests");
    fireEvent.change(labelNumberGuests, { target: { value: "51" } });
    const errorMessage = screen.getByText(/invalid number of guests/i);
    expect(errorMessage).toBeVisible();
  });

  test("Occasion validation function: put invalid input 'Invalid occasion'", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Occasion");
    fireEvent.change(labelNumberGuests, {
      target: { value: "Invalid occasion" },
    });
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("Occasion validation function: put invalid input 'Occasion'", () => {
    render(<MockForm />);

    const labelNumberGuests = screen.getByLabelText("Occasion");
    fireEvent.change(labelNumberGuests, {
      target: { value: "Occasion" },
    });
    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});