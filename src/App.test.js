import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("expect username placeholder in the document", () => {
  render(<App />);

  const usernameElement = screen.getByPlaceholderText("Enter Username");
  expect(usernameElement).toBeInTheDocument();
});

test("expect password placeholder in the document", () => {
  render(<App />);

  const passwordElement = screen.getByPlaceholderText("Enter Password");
  expect(passwordElement).toBeInTheDocument();
});

test("expect button to be disabled during initial render", async () => {
  render(<App />);

  const btnElement = await screen.findByRole("button");
  expect(btnElement).toBeDisabled();
});

test("Testing Onchange Username", () => {
  render(<App />);

  const usernameElement = screen.getByPlaceholderText("Enter Username");

  // by event we are setting the value rohit
  fireEvent.change(usernameElement, { target: { value: "rohit" } });

  expect(usernameElement.value).toBe("rohit");
});

test("Testing Onchange Password", () => {
  render(<App />);

  const passwordElement = screen.getByPlaceholderText("Enter Password");

  // by event we are setting the value rohit
  fireEvent.change(passwordElement, { target: { value: "adsfadf" } });

  expect(passwordElement.value).toBe("adsfadf");
});

test("Sumbit should be enabled when there is Username and Password Value", () => {
  render(<App />);

  const usernameElement = screen.getByPlaceholderText("Enter Username");
  fireEvent.change(usernameElement, { target: { value: "rohit" } });

  const passwordElement = screen.getByPlaceholderText("Enter Password");
  fireEvent.change(passwordElement, { target: { value: "rohit" } });

  const btnElement = screen.getByRole("button");
  expect(btnElement).not.toBeDisabled();
});
