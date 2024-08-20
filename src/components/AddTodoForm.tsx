import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function AddTodoForm({ setTodos }: Props) {
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
  );
}
