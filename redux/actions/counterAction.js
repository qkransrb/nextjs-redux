import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from "../constants/counterConstant";

export const incrementAction = () => (dispatch) => {
  dispatch({ type: COUNTER_INCREMENT });
};

export const decrementAction = () => (dispatch) => {
  dispatch({ type: COUNTER_DECREMENT });
};
