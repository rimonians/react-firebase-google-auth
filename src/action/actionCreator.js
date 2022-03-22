import action from "./actionTypes";

export const authSuccess = (payload) => {
  return {
    type: action.success,
    payload,
  };
};

export const authFailed = () => {
  return {
    type: action.failed,
  };
};

export const authError = () => {
  return {
    type: action.error,
  };
};
