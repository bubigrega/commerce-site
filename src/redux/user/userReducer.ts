type ActionReducer = {
  type: string;
  payload: Object;
};

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

const userReducer = (
  state: User = INITIAL_STATE,
  { type, payload }: ActionReducer
) => {
  switch (type) {
    case "SET_CURRENT_USER":
      return { currentUser: payload };
    default:
      return state;
  }
};

export default userReducer;
