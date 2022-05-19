import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementAction,
  decrementAction,
} from "../redux/actions/counterAction";

export default function counter() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch(incrementAction());
  };

  const decrementHandler = () => {
    dispatch(decrementAction());
  };

  return (
    <Fragment>
      <div className="w-full flex flex-col justify-center items-center">
        <h1>Counter</h1>
        <p>{value}</p>
        <div className="w-20 flex justify-around items-center">
          <button
            type="button"
            onClick={incrementHandler}
            className="px-2 bg-blue-500 text-white"
          >
            +
          </button>
          <button
            type="button"
            onClick={decrementHandler}
            className="px-2 bg-red-500 text-white"
          >
            -
          </button>
        </div>
      </div>
    </Fragment>
  );
}
