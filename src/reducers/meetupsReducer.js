const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function meetupsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };

    default:
      return state;
  }
}
