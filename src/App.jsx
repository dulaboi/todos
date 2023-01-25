import { useState } from "react";
import { Alert, Button, Container, Form, ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import { useTodos } from "./TodosContext";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(false);
  const { todos, addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo === "") return setError(true);
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <Container style={{ maxWidth: "720px" }}>
      {error && (
        <Alert
          className="mt-5"
          variant="danger"
          dismissible
          onClose={() => setError(false)}
        >
          Field is empty!
        </Alert>
      )}
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group className="d-flex justify-content-between align-items-center gap-3">
          <Form.Control
            placeholder="New todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />

          <Button type="submit" style={{ opacity: 0.85 }}>
            +
          </Button>
        </Form.Group>
      </Form>

      <ListGroup className="mt-3">
        {todos?.map((t) => (
          <Todo key={t.id} todo={t} />
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
