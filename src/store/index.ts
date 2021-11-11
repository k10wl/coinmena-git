import { configureStore, combineReducers } from "@reduxjs/toolkit";
import repositories from "./repositories";
import developers from "./developers";

const reducer = combineReducers({
  repositories: repositories.reducer,
  developers: developers.reducer,
});

export default configureStore({
  reducer,
});
