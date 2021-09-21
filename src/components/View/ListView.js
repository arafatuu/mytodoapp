import React from "react";
import { Button, CustomInput, ListGroup, ListGroupItem } from "reactstrap";

const ListItem = ({
  todo,
  toggleComplete,
  toggleSelect,
  performSearch,
  toggleEdit,
  toggleEditForm,
}) => {
  //console.log(todo.isSelect);
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <CustomInput
        type="checkbox"
        id={todo.id}
        onChange={() => toggleSelect(todo.id)}
      />

      <div className="text-left">
        <p className="text-left">{todo.time.toDateString()}</p>
      </div>

      <div className="text-left">
        <h3 className="text-left">{todo.text}</h3>
      </div>

      <div>
        <Button
          className="mx-2"
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </div>
    </ListGroupItem>
  );
};

const ListView = ({ todos, toggleComplete, toggleSelect }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
        />
      ))}
    </ListGroup>
  );
};
export default ListView;
