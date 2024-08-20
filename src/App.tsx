import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TodoTabs } from "./components/TodoTabs";
import { useSessionStorage } from "@uidotdev/usehooks";
import { AddTodoForm } from "./components/AddTodoForm";

export default function App() {
  const [todos, setTodos] = useSessionStorage<Todo[]>("todos", []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="h2" align="center">
          Todos
        </Typography>
        <AddTodoForm setTodos={setTodos} />
        <TodoTabs todos={todos} setTodos={setTodos} />
      </Box>
    </Container>
  );
}
