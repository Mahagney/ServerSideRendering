import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async (dispatch) => {
  let res = "";
  try {
    res = await axios.get("http://react-ssr-api.herokuapp.com/users");
  } catch (err) {
    res = {
      data: [
        { id: 2, name: "John" },
        { id: 4, name: "Vas" },
      ],
    };
  }
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};
