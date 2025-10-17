import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

// Mock react-router-dom useSearchParams
vi.mock("react-router-dom", () => ({
  useSearchParams: () => [new URLSearchParams(), vi.fn()],
}));

// Mock Input and Button if needed (optional)
vi.mock("./Input", () => ({
  default: ({ value, onChange }: any) => (
    <input
      data-testid="input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}));

vi.mock("./Button", () => ({
  default: ({ buttonText, isLoading }: any) => (
    <button data-testid="button" disabled={isLoading}>
      {buttonText}
    </button>
  ),
}));

describe("Search component", () => {
  it("renders input and button", () => {
    render(<Search onSearch={vi.fn()} isLoading={false} />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toHaveTextContent("Search");
  });

  it("updates input value when typing", () => {
    render(<Search onSearch={vi.fn()} isLoading={false} />);
    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "Matrix" } });
    expect((input as HTMLInputElement).value).toBe("Matrix");
  });

  it("disables button when isLoading is true", () => {
    render(<Search onSearch={vi.fn()} isLoading={true} />);
    const button = screen.getByTestId("button");
    expect(button).toBeDisabled();
  });
});
