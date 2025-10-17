// src/components/ui/Button.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

vi.mock("@/assets/icons/Spinner", () => ({
  default: () => <svg data-testid="spinner" />,
}));

describe("Button component", () => {
  it("renders with default props", () => {
    render(<Button buttonText="Click me" />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  it("calls onClick when clicked", () => {
    const onClickMock = vi.fn();
    render(<Button buttonText="Submit" onClick={onClickMock} />);
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders loading state when isLoading is true", () => {
    render(<Button buttonText="Submit" isLoading />);
    expect(screen.getByText("Submit")).toHaveClass("opacity-0");
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("renders the outline variant correctly", () => {
    render(<Button buttonText="Outline" variant="outline" active />);
    const button = screen.getByRole("button", { name: /outline/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("border-fuchsia-500");
  });

  it("renders inactive outline variant correctly", () => {
    render(<Button buttonText="Outline" variant="outline" active={false} />);
    const button = screen.getByRole("button", { name: /outline/i });
    expect(button).toHaveClass("border-slate-50/20");
  });
});
