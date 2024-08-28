import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddTodoForm } from "../../src/components/AddTodoForm";
import userEvent from "@testing-library/user-event";

const mockedSetTodos = jest.fn();

beforeEach(() => {
  mockedSetTodos.mockClear();
});

describe("AddTodoForm", () => {
  it("should render text input", async () => {
    render(<AddTodoForm setTodos={mockedSetTodos} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should allow user to change value", async () => {
    render(<AddTodoForm setTodos={mockedSetTodos} />);
    const user = userEvent.setup();

    const input = screen.getByRole<HTMLInputElement>("textbox");
    expect(input).toHaveValue("");

    await user.type(input, "test");
    expect(input).toHaveValue("test");
  });

  it("should setTodos when button clicked", async () => {
    render(<AddTodoForm setTodos={mockedSetTodos} />);
    const user = userEvent.setup();

    const input = screen.getByRole<HTMLInputElement>("textbox");
    const button = screen.getByRole<HTMLButtonElement>("button");
    await user.type(input, "test");
    expect(input).toHaveValue("test");

    await user.click(button);
    expect(mockedSetTodos).toHaveBeenCalled();
  });

  it("should clear input after user click button", async () => {
    render(<AddTodoForm setTodos={mockedSetTodos} />);
    const user = userEvent.setup();

    const input = screen.getByRole<HTMLInputElement>("textbox");
    const button = screen.getByRole<HTMLButtonElement>("button");
    await user.type(input, "test");
    expect(input).toHaveValue("test");

    await user.click(button);
    expect(input).toHaveValue("");
  });
});
