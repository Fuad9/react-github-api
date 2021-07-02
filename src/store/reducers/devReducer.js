const devReducer = (devs = {}, action) => {
  switch (action.type) {
    case "GET_GITHUB_USERS":
      return action.devs.data;

    default:
      return devs;
  }
};

export default devReducer;
