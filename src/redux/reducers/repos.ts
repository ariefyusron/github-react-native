import {
  GET_REPOS_ERROR,
  GET_REPOS_PENDING,
  GET_REPOS_SUCCESS,
} from "../actions";
import { Action, ReposState } from "../types";

const initialState: ReposState = {
  isLoading: false,
  list: [],
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case GET_REPOS_PENDING:
      return { ...state, isLoading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, isLoading: false, list: payload.data };
    case GET_REPOS_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
