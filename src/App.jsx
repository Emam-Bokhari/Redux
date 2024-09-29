import { Fragment } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import TodoList from "./component/todoContainer/TodoList";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Fragment>
      <Provider store={store} >
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr className="mt-4" />
          <TodoList />
          <hr className="mt-4" />
          <Footer />
        </div>
      </div>
      </Provider>
    </Fragment>
  );
}
