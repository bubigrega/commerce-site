import { CurrentUser } from "./userReducer";

export const setCurrentUser = (user: CurrentUser) => {
  return <const>{
    type: "SET_CURRENT_USER",
    payload: user,
  };
};

export type UserActions = ReturnType<typeof setCurrentUser>;
