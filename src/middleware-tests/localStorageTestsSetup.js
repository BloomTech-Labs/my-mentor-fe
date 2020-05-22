import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import LocalStorageTest from "./localstorage";

describe("LocalStorageTest", () => {
  const fakeAxios = {
    get: jest.fn(() => Promise.resolve({ data: "Mufasa" }))
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
    render(<LocalStorageTest axios={fakeAxios} />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });
  
  it("Should call localStorage setItem on text change", () => {
    const { queryByPlaceholderText } = render(<LocalStorageTest axios={fakeAxios} />);

    const input = queryByPlaceholderText("Enter your name");
    fireEvent.change(input, { target: { value: "Beyonce" } });

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "name",
      '"Beyonce"'
    );
  });

  it("Should call axios.get on click and call localStorage setItem on button click", async () => {
    const { getByDisplayValue, getByText } = render(<LocalStorageTest axios={fakeAxios} />);

    const fetchButton = getByText("Fetch");
    // fake click
    fireEvent.click(fetchButton);
    await waitForElement(() => getByDisplayValue("Mufasa"));

    expect(fakeAxios.get).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "name",
      '"Mufasa"'
    );
  });
});