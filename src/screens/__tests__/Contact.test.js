// src/screens/__tests__/Contact.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../contact/Contact"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  // test can also be written like it
    it("should load contact us component", () => {
      render(<Contact />);
      const heading = screen.getByRole("heading", { name: /contact us/i });
      expect(heading).toBeInTheDocument();
    });
//   test("should load contact us component", () => {
//     render(<Contact />);
//     const heading = screen.getByRole("heading", { name: /contact us/i });
//     expect(heading).toBeInTheDocument();
//   });

  test("should load button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load 2 inputs in the component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});
