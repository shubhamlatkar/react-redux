import * as actionTypes from "./actions";

const initState = {
  users: [
    {
      id: "1",
      firstName: "shubham",
      lastName: "Latkar",
      balance: "12.12"
    },
    {
      id: "2",
      firstName: "Kunal",
      lastName: "Latkar",
      balance: "1.10"
    },
    {
      id: "3",
      firstName: "Kiran",
      lastName: "Latkar",
      balance: "123.12"
    },
    {
      id: "4",
      firstName: "sudha",
      lastName: "Latkar",
      balance: "111.10"
    }
  ]
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER: {
      let users = [...state.users];
      users.unshift(action.user);
      return {
        ...state,
        users: [...users]
      };
    }
    default:
      return state;
  }
};

export default userReducer;
