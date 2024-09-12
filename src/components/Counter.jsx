import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter/actionCreators";

export default function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <Fragment>
      <p>Counter: {count}</p>
      <button onClick={() => incrementHandler(1)}>Increment</button>
      <button onClick={() => decrementHandler(1)}>Decrement</button>
    </Fragment>
  );
}
