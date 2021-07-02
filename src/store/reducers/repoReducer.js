const repoReducer = (repos = [], action) => {
  switch (action.type) {
    case "GET_GITHUB_USER_REPOS":
      return action.repos.data;

    default:
      return repos;
  }
};

export default repoReducer;
