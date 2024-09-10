import { Fragment } from "react";

export default function Counter() {
  return (
    <Fragment>
      <div className="shadow-md w-96 h-36 mx-auto mt-7">
        <p className="text-center pt-7 font-bold text-lg">0</p>
        <div className="text-center">
          <button className="bg-blue-400 px-3 py-2 rounded-md text-white text-lg hover:bg-blue-500 transition-all">
            Increment
          </button>
          <button className="bg-red-400 px-3 py-2 rounded-md text-white text-lg ml-3 hover:bg-red-500 transition-all">
            Decrement
          </button>
        </div>
      </div>
    </Fragment>
  );
}
