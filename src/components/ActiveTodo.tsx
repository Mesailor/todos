import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  todo: Todo;
  toggleCompleted: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

export function ActiveTodo({ todo, toggleCompleted, deleteTodo }: Props) {
  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton
          onClick={() => deleteTodo(todo.id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={"complete-button"}
        onClick={() => toggleCompleted(todo)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={todo.name}
          primaryTypographyProps={{ variant: "body1" }}
        />
      </ListItemButton>
    </ListItem>
  );
}
