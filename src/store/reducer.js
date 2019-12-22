const initState = {
  counter: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.val
      };
    case "DECREMENT":
      return {
        counter: state.counter - action.val
      };
    default:
      return state;
  }
};

export default reducer;
