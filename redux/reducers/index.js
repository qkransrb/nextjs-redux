import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { counterReducer } from "./counterReducer";

const reducers = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return combineReducers({
        counter: counterReducer,
      })(state, action);
  }
};

export default reducers;
