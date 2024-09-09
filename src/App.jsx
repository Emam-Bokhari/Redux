import { Fragment, useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
];

export default function App() {
  const [states, setStates] = useState(initialState);

  // total count
  const totalCount = () => {
    return states.reduce(
      (prevTotal, currentCount) => prevTotal + currentCount.count,
      0
    );
  };
  // increment
  function handleIncrement(id) {
    const updateIncrement = states.map((state) => {
      if (state.id === id) {
        return {
          ...state,
          count: state.count + 1,
        };
      }
      return {
        ...state,
      };
    });
    setStates(updateIncrement);
  }
  // decrement
  function handleDecrement(id) {
    const updateDecrement = states.map((state) => {
      if (state.id === id) {
        return {
          ...state,
          count: state.count - 1,
        };
      }
      return {
        ...state,
      };
    });
    setStates(updateDecrement);
  }

  return (
    <Fragment>
      <h2 className="text-center text-3xl font-medium text-[#3a3a3a] mt-10">
        Simple Counter Application
      </h2>
     { states.map((state)=>(
      <Counter key={state.id} count={state.count} id={state.id} onIncrement={handleIncrement} onDecrement={handleDecrement} />
     ))}
      <Stats totalCount={totalCount()} />
    </Fragment>
  );
}