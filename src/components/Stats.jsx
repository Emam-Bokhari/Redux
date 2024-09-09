import { Fragment } from "react";

export default function Stats({ totalCount }) {
  return (
    <Fragment>
      <div className="shadow-md w-1/2 h-36 mx-auto mt-7 flex justify-center items-center">
        <h2 className="text-xl font-bold  mt-5 text-[#2a2a2a] ">
          Total Count:<span className="text-red-500">{totalCount}</span>
        </h2>
      </div>
    </Fragment>
  );
}
