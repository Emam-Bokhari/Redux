import { Fragment } from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterTwo from "./components/CounterTwo";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <h2 className="text-center text-3xl font-medium text-[#3a3a3a] mt-10">
          Simple Counter Application
        </h2>
        <Counter />
        <CounterTwo />
      </Provider>
    </Fragment>
  );
}
