import { Fragment } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <Fragment>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        <TodoItem />
      </div>
    </Fragment>
  );
}
