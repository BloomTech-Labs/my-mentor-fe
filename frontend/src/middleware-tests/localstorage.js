import React from "react";
import { useState } from "react";

// mock function using localStorage() to test future data fetching within axioswithauth.js 
function LocalStorage({ axios }) {

  const [name, setName] = useLocalStorage("name", "Bob");

  const fetch = async endpoint => {
    const response = await axios.get(endpoint);
    setName(response.data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          fetch("www.google.com");
        }}
      >
        Fetch
      </button>
    </div>
  );
}

// Hook
function useLocalStorage(token, initialValue) {
  // State to store our value
  // Pass initial state function to "useState" so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by token
      const item = window.localStorage.getItem(token);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return "initialValue"
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState main 'setter' function that persists the new value to --> localStorage.

  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
      //  "instanceof" is used to test if the value stored is true/false
        value instanceof Function ? value(storedValue) : value;
      // Save state ^^
      setStoredValue(valueToStore);
      // Then save to local storage
      window.localStorage.setItem(token, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default LocalStorage;