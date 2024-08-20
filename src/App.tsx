import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@mui/material";
import { TodoTabs } from "./components/TodoTabs";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState("");

  function addTodo() {
    if (!name.trim()) return;
    setTodos((prev) => [{ id: uuidv4(), name, completed: false }, ...prev]);
    setName("");
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="h2" align="center">
          Todos
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", gap: "1rem" }}
        >
          <TextField
            id="standard-basic"
            label="Todo name"
            variant="standard"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Box>
        <TodoTabs todos={todos} setTodos={setTodos} />
      </Box>
    </Container>
  );
}
