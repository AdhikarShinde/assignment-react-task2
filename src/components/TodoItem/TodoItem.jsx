import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, handleToggleTodo, handleRemoveTodo }) => {
  return (
    <li key={todo.id} className={styles.todoItem}>
      <input
        type="checkbox"
        className={styles.todoCheckbox}
        checked={todo.completed}
        onChange={() => handleToggleTodo(todo.id)}
      />
      <span
        className={styles.todoText}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
