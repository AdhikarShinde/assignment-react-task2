import TodoApp from "./components/TodoApp/TodoApp";
import Styles from "./App.module.css";
function App() {
  return (
    <>
      <main className={Styles.main}>
        <TodoApp />
      </main>
    </>
  );
}

export default App;
