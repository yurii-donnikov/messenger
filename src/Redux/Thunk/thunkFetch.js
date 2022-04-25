import { featchMessageSuccess } from "./thunkActions";
import { fetchMessageError } from "./thunkActions";

export const fetchNewMessage = () => {
  return function (dispatch) {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((json) => dispatch(featchMessageSuccess(json)))
      .catch((error) => dispatch(fetchMessageError(error)));
  };
};
