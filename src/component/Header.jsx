import { Fragment } from "react";
import notesImage from "../assets/notes.png";
import doubleTickImage from "../assets/double-tick.png";
import { CiCirclePlus } from "react-icons/ci";

export default function Header() {
  return (
    <Fragment>
      <div>
        <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
          <img src={notesImage} className="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          />
          <button type="submit">
            <CiCirclePlus className="text-4xl" />
          </button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li className="flex space-x-1 cursor-pointer">
            <img className="w-4 h-4" src={doubleTickImage} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li className="cursor-pointer">Clear completed</li>
        </ul>
      </div>
    </Fragment>
  );
}
