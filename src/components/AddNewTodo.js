import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@material-ui/core";

const AddNewTodo = ({ addTodo, resetTodo, saveTodo }) => {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  const resetList = () => {
    resetTodo(todos);
    setTodos([]);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Box width={300}>
        <label htmlFor="todo"></label>
        <input
          className="form-control"
          placeholder="Add Todo List"
          aria-label="default input example"
          type="text"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </Box>
      <br />
      <Box sx={{ display: "flex" }} justifyContent="space-between" width={300}>
        <Button
          startIcon={<AddCircleOutlineIcon />}
          type="button"
          variant="contained"
          color="warning"
          onClick={onFormSubmit}
        >
          Add
        </Button>

        <Button
          startIcon={<RestartAltIcon />}
          type="button"
          variant="contained"
          color="error"
          onClick={resetList}
        >
          Reset
        </Button>

        <Button
          startIcon={<SaveIcon />}
          type="button"
          variant="contained"
          color="info"
          onClick={saveTodo}
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

export default AddNewTodo;
