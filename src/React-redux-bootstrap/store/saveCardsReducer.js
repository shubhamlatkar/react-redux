import * as actionTypes from "./actions";

const initState = {
  cards: []
};

const saveCardsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CARDS: {
      return {
        ...state,
        cards: action.cards
      };
    }
    default:
      return state;
  }
};

export default saveCardsReducer;
