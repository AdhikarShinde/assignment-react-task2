import React from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./TodoApp.module.css";

const TodoApp = () => {
  return (
    <div className={styles.todoApp}>
      <TodoHeader />
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default TodoApp;
