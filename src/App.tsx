import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Todo 1"), new Todo("Todo 2"), new Todo("Todo 3")];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
