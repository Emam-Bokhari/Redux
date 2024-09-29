import { Fragment } from "react";
import cancelIcon from "../../assets/cancel.png";
import { useDispatch } from "react-redux";
import {
  colorSelected,
  deleted,
  toggled,
} from "../../redux/todos/actionCreators";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { id, text, completed, color } = todo;
  // console.log(text, color, completed);

  // status
  function handleChangeStatus(todoId) {
    dispatch(toggled(todoId));
  }

  // color selected
  function handleColorSelected(color, todoId) {
    dispatch(colorSelected(color, todoId));
  }

  // delete
  function handleDelete(todoId) {
    dispatch(deleted(todoId));
  }

  return (
    <Fragment>
      <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
        <div
          className={`rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
            completed && "border-green-500 focus-within:border-green-500"
          }`}
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChangeStatus(id)}
            className="opacity-0 absolute rounded-full"
          />

          <svg
            className={`${
              completed ? "block" : "hidden"
            } fill-current w-3 h-3 text-green-500 pointer-events-none`}
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>

        <div className="select-none flex-1 line-through">{text}</div>

        <div
          onClick={() => handleColorSelected("green", id)}
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
            color === "green" &&
            "border-green-500 hover:bg-green-500 bg-green-500"
          }`}
        ></div>
        <div
          onClick={() => handleColorSelected("yellow", id)}
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
            color === "yellow" &&
            "border-yellow-500 hover:bg-yellow-500 bg-yellow-500"
          }`}
        ></div>
        <div
          onClick={() => handleColorSelected("red", id)}
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${
            color === "red" && "border-red-500 hover:bg-red-500 bg-red-500"
          }`}
        ></div>

        <img
          onClick={() => handleDelete(id)}
          src={cancelIcon}
          className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
          alt="Cancel"
        />
      </div>
    </Fragment>
  );
}
