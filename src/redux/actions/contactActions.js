import {types} from './types';

export function fetchContactData(data) {
  return {
    type: types.SEND_REQUEST_GET_ALL_USER,
    payload: data,
  };
}

export function fetchDataSuccess(user) {
  return {
    type: types.SEND_REQUEST_GET_ALL_USER_SUCCESS,
    payload: user,
  };
}

export function fetchDataFailure(error) {
  return {
    type: types.SEND_REQUEST_GET_ALL_USER_FAILURE,
    payload: {},
    error: error,
  };
}
