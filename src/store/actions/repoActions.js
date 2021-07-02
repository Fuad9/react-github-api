import axios from "axios";

export const getGithubUserRepos = (search) => {
  return async (dispatch) => {
    try {
      await axios
        .get(`http://api.github.com/users/${search}/repos`)
        .then((repos) => {
          dispatch({
            type: "GET_GITHUB_USER_REPOS",
            repos,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
