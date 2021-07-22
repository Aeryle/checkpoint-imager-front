import { createStore } from "redux";

export interface IStore {
  user?: IPasswordlessUser;
}

interface IAction {
  type: TUserTypes;
  payload?: IFullUser;
}

type TUserTypes = "user:login" | "user:logout";
const initialState: IStore = {};

function userReducer(state: IStore = initialState, action: IAction): IStore {
  switch (action.type) {
    case "user:login":
      return {
        ...state,
        user: action.payload,
      };

    case "user:logout":
      return {
        ...initialState,
        user: initialState.user,
      };

    default:
      return state;
  }
}

export const userStore = createStore(userReducer);
