import { Box, List, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel } from "./CustomTabPanel";
import { ActiveTodo } from "./ActiveTodo";
import { CompletedTodo } from "./CompletedTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function TodoTabs({ todos, setTodos }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  function toggleCompleted(todo: Todo) {
    const newTodos = [...todos];
    const i = newTodos.findIndex((item) => item.id === todo.id);
    newTodos[i] = { ...todo, completed: !todo.completed };
    setTodos(newTodos);
  }

  function deleteTodo(id: string) {
    const newTodos = [...todos];
    const i = newTodos.findIndex((item) => item.id === id);
    newTodos.splice(i, 1);
    setTodos(newTodos);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="All" />
          <Tab label="Active" />
          <Tab label="Completed" />
        </Tabs>
      </Box>
      <CustomTabPanel value={activeTab} index={0}>
        <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
          {todos.map((todo) =>
            todo.completed ? (
              <CompletedTodo
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
              />
            ) : (
              <ActiveTodo
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
              />
            )
          )}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={1}>
        <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
          {todos.map((todo) =>
            todo.completed ? null : (
              <ActiveTodo
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
              />
            )
          )}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={2}>
        <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
          {todos.map((todo) =>
            todo.completed ? (
              <CompletedTodo
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
              />
            ) : null
          )}
        </List>
      </CustomTabPanel>
    </Box>
  );
}
