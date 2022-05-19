import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import reducers from "./reducers";

const makeStore = () => {
  const initialState = {};
  const middlewares = [thunk];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(reducers, initialState, enhancer);
};

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default wrapper;
