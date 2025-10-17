import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

vi.mock("react-router-dom", () => ({
  useSearchParams: () => [new URLSearchParams(), vi.fn()],
}));

describe("Pagination component", () => {
  it("renders the correct number of page buttons", () => {
    const onClickMock = vi.fn();
    render(<Pagination totalPages={5} onClickPagination={onClickMock} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(5);

    // Check text content of each button
    buttons.forEach((button, index) => {
      expect(button).toHaveTextContent(`${index + 1}`);
    });
  });

  it("limits to 10 buttons if totalPages > 10", () => {
    const onClickMock = vi.fn();
    render(<Pagination totalPages={20} onClickPagination={onClickMock} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(10);
    expect(buttons[0]).toHaveTextContent("1");
    expect(buttons[9]).toHaveTextContent("10");
  });

  it("marks the active page correctly", () => {
    const onClickMock = vi.fn();
    render(<Pagination totalPages={5} onClickPagination={onClickMock} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveClass("border-fuchsia-500");
  });

  it("calls onClickPagination when a page button is clicked", () => {
    const onClickMock = vi.fn();
    render(<Pagination totalPages={5} onClickPagination={onClickMock} />);

    const button3 = screen.getByText("3").closest("button")!;
    fireEvent.click(button3);

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith("3");
  });
});
