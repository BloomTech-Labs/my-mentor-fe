import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import LocalStorage from "./localStorage";

describe("LocalStorage", () => {
  const fakeAxios = {
    get: jest.fn(() => Promise.resolve({ data: "Rihanna" }))
  };

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  it("Should call localStorage getItem on render", () => {
    render(<LocalStorage axios={fakeAxios} />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it("Should call localStorage setItem on text change", () => {
    const { queryByPlaceholderText } = render(<LocalStorage axios={fakeAxios} />);

    const input = queryByPlaceholderText("Enter your name");
    fireEvent.change(input, { target: { value: "Hov" } });

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "name",
      '"Hov"'
    );
  });

  it("Should call axios.get on click and call localStorage setItem on button click", async () => {
    const { getByDisplayValue, getByText } = render(<LocalStorage axios={fakeAxios} />);

    const fetchButton = getByText("Fetch");
    fireEvent.click(fetchButton);
    await waitForElement(() => getByDisplayValue("Rihanna"));

    expect(fakeAxios.get).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "name",
      '"Rihanna"'
    );
  });
});