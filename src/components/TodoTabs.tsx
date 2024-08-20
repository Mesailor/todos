import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
} from "@mui/material";
import { useState } from "react";
import { CustomTabPanel } from "./CustomTabPanel";
import { ActiveItem } from "./ActiveItem";
import { CompletedItem } from "./CompletedItem";

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
              <CompletedItem
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
              />
            ) : (
              <ActiveItem
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
              />
            )
          )}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={1}>
        <List
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todos.map((todo) =>
            todo.completed ? null : (
              <ActiveItem
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
              />
            )
          )}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={2}>
        <List
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todos.map((todo) =>
            todo.completed ? (
              <CompletedItem
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
              />
            ) : null
          )}
        </List>
      </CustomTabPanel>
    </Box>
  );
}
