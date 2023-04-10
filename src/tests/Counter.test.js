import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter component", () => {
  let component;
  beforeEach(() => {
    component = render(<Counter />);
  });

  test("renders counter message", () => {
    const message = component.getByText(/Counter/);
    expect(message).toBeInTheDocument();
  });

  test("should render initial count with value of 0", () => {
    const count = component.getByTestId("count");
    expect(count.textContent).toBe("0");
  });

  test("clicking + increments the count", () => {
    const incrementButton = component.getByText("+");
    fireEvent.click(incrementButton);
    const count = component.getByTestId("count");
    expect(count.textContent).toBe("1");
  });

  test("clicking - decrements the count", () => {
    const decrementButton = component.getByText("-");
    fireEvent.click(decrementButton);
    const count = component.getByTestId("count");
    expect(count.textContent).toBe("-1");
  });
});
