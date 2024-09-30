import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const numberOfTodos = (number_of_todos) => {
  switch (number_of_todos) {
    case 0:
      return "No Task";
    case 1:
      return "1 Task";
    default:
      return `${number_of_todos} tasks`;
  }
};

export default function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const todosRemaining = todos.filter((todo) => !todo.completed).length;

  const { color, status } = filters;

  const handleStatusChange = (newStatus) => {
    dispatch(status(newStatus));
  };

  return (
    <Fragment>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfTodos(todosRemaining)}</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            onClick={() => handleStatusChange("All")}
            className={`cursor-pointer ${status === "All" && "font-bold"}`}
          >
            All
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("Incomplete")}
            className={`cursor-pointer ${
              status === "Incomplete" && "font-bold"
            }`}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("Complete")}
            className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
          <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
          <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
        </ul>
      </div>
    </Fragment>
  );
}
