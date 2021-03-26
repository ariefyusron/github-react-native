import { Alert } from "react-native";

import { Dispatch } from "../types";
import { API } from "../../configs";

export const GET_REPOS_PENDING = "GET_REPOS_PENDING";
export const GET_REPOS_SUCCESS = "GET_REPOS_SUCCESS";
export const GET_REPOS_ERROR = "GET_REPOS_ERROR";

export const getRepos = (username: string, cb?: () => void) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_REPOS_PENDING });
    const res = await API.getRepos(username);
    dispatch({
      type: GET_REPOS_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: GET_REPOS_ERROR, payload: { data: err.response } });
      if (err.response.status === 404) {
        Alert.alert("Username Not Found!");
        cb && cb();
      }
    } else {
      dispatch({ type: GET_REPOS_ERROR });
    }
  }
};
