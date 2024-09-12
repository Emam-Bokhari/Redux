import { Fragment } from "react";
import Counter from "./components/Counter";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div>
          <Counter />
        </div>
      </Provider>
    </Fragment>
  );
}
