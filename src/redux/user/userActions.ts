import { CurrentUser } from "./userReducer";

export const setCurrentUser = (user: CurrentUser) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
