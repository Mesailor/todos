import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoTabs } from "../../src/components/TodoTabs";
import userEvent from "@testing-library/user-event";

const mockedSetTodos = jest.fn();

beforeEach(() => {
  mockedSetTodos.mockClear();
});

describe("TodoTabs", () => {
  it("should render list with todos items", async () => {
    const todos: Todo[] = [
      { id: "1", name: "todo", completed: false },
      { id: "2", name: "todo", completed: false },
      { id: "3", name: "todo", completed: false },
    ];

    render(<TodoTabs todos={todos} setTodos={mockedSetTodos} />);

    expect(screen.getByRole("list")).toBeInTheDocument();

    expect(screen.getAllByRole("listitem").length).toBe(3);
  });

  it("should be able to change completed field", async () => {
    const user = userEvent.setup();
    const todos: Todo[] = [
      { id: "1", name: "todo", completed: false },
      { id: "2", name: "todo", completed: false },
    ];

    render(<TodoTabs todos={todos} setTodos={mockedSetTodos} />);

    const listitems = screen.getAllByRole("complete-button");

    await user.click(listitems[0]);

    expect(mockedSetTodos).toHaveBeenCalled();
    expect(mockedSetTodos).toHaveBeenCalledWith([
      { id: "1", name: "todo", completed: true },
      { id: "2", name: "todo", completed: false },
    ]);
  });

  it("should be able to delete todo", async () => {
    const user = userEvent.setup();
    const todos: Todo[] = [
      { id: "1", name: "todo", completed: false },
      { id: "2", name: "todo", completed: false },
    ];

    render(<TodoTabs todos={todos} setTodos={mockedSetTodos} />);

    const deleteButtons = screen.getAllByRole("button");

    await user.click(deleteButtons[0]);
    expect(mockedSetTodos).toHaveBeenCalledTimes(1);
    expect(mockedSetTodos).toHaveBeenCalledWith([
      { id: "2", name: "todo", completed: false },
    ]);
  });
});
