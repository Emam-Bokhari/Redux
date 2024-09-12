import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterTwo/actionsCreators";

export default function CounterTwo() {
  const count = useSelector((state) => state.counterTwo.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <Fragment>
      <div className="shadow-md w-96 h-36 mx-auto mt-7">
        <p className="text-center pt-7 font-bold text-lg">{count}</p>
        <div className="text-center">
          <button
            onClick={() => incrementHandler(1)}
            className="bg-blue-400 px-3 py-2 rounded-md text-white text-lg hover:bg-blue-500 transition-all"
          >
            Increment
          </button>
          <button
            onClick={() => decrementHandler(1)}
            className="bg-red-400 px-3 py-2 rounded-md text-white text-lg ml-3 hover:bg-red-500 transition-all"
          >
            Decrement
          </button>
        </div>
      </div>
    </Fragment>
  );
}
