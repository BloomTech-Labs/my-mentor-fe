

Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null)
    },
    // writable = allows reassigning values to that property , by using an assignment operator
    writable: true
  });