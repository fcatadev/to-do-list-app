import React, { useState, useEffect, useCallback } from "react";
import AddNewTodo from "./AddNewTodo";
import { FiThumbsUp } from "react-icons/fi";
import { RiDeleteBin5Fill, RiArrowGoBackLine } from "react-icons/ri";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  TextField,
  List,
  ListItemText,
  ListItem,
  Box,
} from "@material-ui/core";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState(
    new Date().toLocaleDateString().split(".").reverse().join("-")
  );

  const addTodo = useCallback(
    (text) => {
      const list = todos;
      list.push({
        text: text,
        id: Math.floor(Math.random() * 10000),
        isDone: false,
      });
      setTodos([...list]);
    },
    [todos]
  );

  const loadTodos = useCallback((currentDate) => {
    const listData = window.localStorage.getItem(currentDate);
    setTodos(JSON.parse(listData) || []);
  }, []);

  useEffect(() => {
    loadTodos(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = useCallback(() => {
    window.localStorage.setItem(date, JSON.stringify(todos));
  }, [date, todos]);

  const handleDateChange = useCallback(
    (e) => {
      e.preventDefault();
      setDate(e.target.value);
      loadTodos(e.target.value);
    },
    [loadTodos]
  );

  const delTodo = useCallback(
    (id) => {
      const removeItem = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(removeItem);
      setDate(date);
    },
    [todos, date]
  );

  const doneTodo = useCallback(
    (index) => {
      const currentTodos = todos;
      currentTodos[index].isDone = true;
      setTodos([...currentTodos]);
    },
    [todos]
  );

  const backToFirst = useCallback(
    (index) => {
      const currentTodos = todos;
      currentTodos[index].isDone = false;
      setTodos([...currentTodos]);
    },
    [todos]
  );

  const handleEnd = useCallback(
    (result) => {
      if (!result.destination) return;
      const items = Array.from(todos);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setTodos(items);
    },
    [todos]
  );

  const resetTodo = useCallback(() => {
    window.localStorage.removeItem(date);
    setTodos([]);
  }, [date]);

  const renderTodos = useCallback(() => {
    return (
      todos.length > 0 &&
      todos.map((todo, index) => {
        return (
          <Draggable
            key={todo.id}
            draggableId={todo.id.toString()}
            index={index}
          >
            {(provided, snapshot) => (
              <ListItem
                {...provided.draggableProps}
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                className={
                  snapshot.isDragging
                    ? "selected list-group-item list-group-item-warning d-flex justify-content-between align-items-start listStyle"
                    : "not-selected list-group-item list-group-item-warning d-flex justify-content-between align-items-start listStyle"
                }
                key={todo.id}
                id={todo.id}
              >
                <Box mr="5px" style={{ overflow: "hidden" }}>
                  {todo.isDone ? (
                    <ListItemText
                      style={{
                        textDecoration: "line-through",
                        wordBreak: "normal",
                        whiteSpace: "normal",
                      }}
                    >
                      {index + 1}.{todo.text}
                    </ListItemText>
                  ) : (
                    <ListItemText>
                      {index + 1}.{todo.text}
                    </ListItemText>
                  )}
                </Box>

                <span>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm backBtn"
                    onClick={() => backToFirst(index)}
                  >
                    <RiArrowGoBackLine className="iconStyle" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={() => doneTodo(index)}
                  >
                    <FiThumbsUp className="iconStyle" />
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm delBtn"
                    onClick={() => delTodo(todo.id)}
                  >
                    <RiDeleteBin5Fill className="iconStyle" />
                  </button>
                </span>
              </ListItem>
            )}
          </Draggable>
        );
      })
    );
  }, [delTodo, doneTodo, todos, backToFirst]);

  return (
    <Box className="justify-content-center">
      <div className="container box">
        <div className="row justify-content-start">
          <div className="row justify-content-center">
            <div className="col-25">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p className="textfont">Create Your To-Do List!</p>

                  <div
                    style={{
                      margin: "auto",
                      display: "block",
                      width: "fit-content",
                    }}
                  >
                    <h3 className="date">Today's Date?</h3>
                    <div className="dateBox">
                      <TextField
                        onChange={handleDateChange}
                        id="date"
                        type="date"
                        value={date}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                </blockquote>
              </figure>

              <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="to-dos">
                  {(provided) => (
                    <List
                      className="list-group"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {renderTodos()}
                      {provided.placeholder}
                    </List>
                  )}
                </Droppable>
              </DragDropContext>
              <Box ml="23%">
                <AddNewTodo
                  addTodo={addTodo}
                  resetTodo={resetTodo}
                  saveTodo={save}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default TodoList;
