import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import styles from "./TodoForm.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = e.target.value.trim();
    if (text) {
      dispatch(addTodo(text));
      e.target.value = "";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo(event);
    }
  };

  return (
    <form className={styles.todoForm} onSubmit={handleAddTodo}>
      <input
        type="text"
        name="todo"
        className={styles.todoInput}
        onKeyDown={handleKeyDown}
        placeholder="New Todo "
      />
    </form>
  );
};

export default TodoForm;
