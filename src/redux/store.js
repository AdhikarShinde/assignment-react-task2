// store.js
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/todoSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todosState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todosState", serializedState);
  } catch (err) {
    // Handle errors while saving state
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
