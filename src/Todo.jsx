import { Button, ListGroup } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useTodos } from "./TodosContext";

export default function Todo({ todo }) {
  const { deleteTodo } = useTodos();

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-center"
    >
      {todo.title}
      <Button
        onClick={() => deleteTodo(todo.id)}
        variant="outline-danger"
        style={{ opacity: 0.75 }}
      >
        <Trash />
      </Button>
    </ListGroup.Item>
  );
}
