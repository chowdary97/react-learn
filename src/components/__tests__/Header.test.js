import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("test cases for Header component", () => {
  it("should load login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByRole("button", { name: "Login" }); // when we have multiple buttons
    // const loginButton = screen.getByText("Login")// another way to find login button

    // Assertion
    expect(loginButton).toBeInTheDocument();

    // we can even write regx as well to identiy
    const cartItems = screen.getByText(/Menu/);
    expect(cartItems).toBeInTheDocument();
  });
  it("should change to logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logOutButton = screen.getByRole("button", { name: "Logout" });
    expect(logOutButton).toBeInTheDocument();
  });
});
