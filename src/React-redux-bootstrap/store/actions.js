import axios from "axios";
export const ADD_USER = "ADD_USER";

export const REMOVE_USER = "REMOVE_USER";

export const SAVE_CARDS = "SAVE_CARDS";

export const saveCards = result => {
  return {
    type: SAVE_CARDS,
    cards: result
  };
};

export const getAllCards = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(result => {
        // console.log("result", result.data);
        // this.props.saveCards(result.data);
        // this.setState({ cards: result.data, loading: !this.state.loading });
        // console.log("End Axios", this.state.loading);
        dispatch(saveCards(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
