import axios from "axios";

export const getGithubUsers = (search) => {
  return async (dispatch) => {
    try {
      await axios.get(`http://api.github.com/users/${search}`).then((devs) => {
        dispatch({
          type: "GET_GITHUB_USERS",
          devs,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
};
