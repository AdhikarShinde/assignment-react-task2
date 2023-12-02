import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodo } from "../../redux/todoSlice";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleTodo={handleToggleTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
