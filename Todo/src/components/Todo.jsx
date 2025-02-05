import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };

  const markHandler = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <h3>Todo List App</h3>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            <button onClick={() => markHandler(todo.id)}>Mark Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
