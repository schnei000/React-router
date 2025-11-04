import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

function renderWithRouter(ui, { route = '/' } = {}) {
  return render(ui, { wrapper: ({ children }) => <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter> });
}

test('wraps content in a div with "navbar" class', () => {
  const { container } = renderWithRouter(
    <NavBar />
  );
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink> that is active on the home page", () => {
  renderWithRouter(
    <NavBar />
  );
  const a = screen.queryByText(/Home/g);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");
  expect(a.classList).toContain("active");
});

test("renders a Movies <NavLink> that is active on the movies page", () => {
  renderWithRouter(<NavBar />, { route: "/movies" });
  const a = screen.queryByText(/Movies/g);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/movies");
  expect(a.classList).toContain("active");
});

test("renders a Actors <NavLink> that is active on the actors page", () => {
  renderWithRouter(<NavBar />, { route: "/actors" });
  const a = screen.queryByText(/Actors/g);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/actors");
  expect(a.classList).toContain("active");
});

test("renders a Directors <NavLink> that is active on the directors page", () => {
  renderWithRouter(<NavBar />, { route: "/directors" });
  const a = screen.queryByText(/Directors/g);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/directors");
  expect(a.classList).toContain("active");
});
