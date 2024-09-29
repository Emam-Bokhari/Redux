import { Fragment } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <Fragment>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </Fragment>
  );
}
