import { UserActions } from "./userActions";

export type CurrentUser = {
  id: string;
  email?: string;
  displayName?: string;
} | null;

export type User = {
  currentUser: CurrentUser;
};

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (
  state: User = INITIAL_STATE,
  { type, payload }: UserActions
) => {
  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
