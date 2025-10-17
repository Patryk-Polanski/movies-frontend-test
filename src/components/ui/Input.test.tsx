// src/components/ui/Input.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders the input element with correct placeholder and value", () => {
    render(
      <Input
        inputId="movie"
        inputName="movieName"
        value="Inception"
        onChange={() => {}}
      />
    );

    const input = screen.getByPlaceholderText(/enter movie name here/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Inception");
    expect(input).toHaveAttribute("id", "movie");
    expect(input).toHaveAttribute("name", "movieName");
  });
});
