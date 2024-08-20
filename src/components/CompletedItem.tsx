import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface Props {
  todo: Todo;
  toggleCompleted: (todo: Todo) => void;
}

export function CompletedItem({ todo, toggleCompleted }: Props) {
  return (
    <ListItem key={todo.id} disablePadding>
      <ListItemButton
        role={undefined}
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
          primaryTypographyProps={{
            variant: "body1",
            color: "textDisabled",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}
