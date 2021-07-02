import { combineReducers } from "redux";
import authReducer from "./authReducer";
import devReducer from "./devReducer";
import repoReducer from "./repoReducer";

const rootReducer = combineReducers({
  users: authReducer,
  devs: devReducer,
  repos: repoReducer,
});

export default rootReducer;
