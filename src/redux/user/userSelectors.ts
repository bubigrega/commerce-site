import { createSelector } from "reselect";
import { RootReducer } from "../rootReducer";

const selectUser = (state: RootReducer) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
