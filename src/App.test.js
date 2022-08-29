import { render, screen } from "@testing-library/react";
import App from "./App";

test("Ceck for the Home Link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("check for Project link", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/project/i);
  expect(linkElement).toBeInTheDocument();
});
