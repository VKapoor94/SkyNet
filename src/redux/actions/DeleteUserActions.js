import {types} from './types';

export function deleteUser(data) {
  return {
    type: types.SEND_REQUEST_DELETE_USER,
    payload: data,
  };
}

export function deleteUserSuccess(user) {
  return {
    type: types.SEND_REQUEST_DELETE_USER_SUCCESS,
    payload: user,
  };
}

export function deleteUserFailure(error) {
  return {
    type: types.SEND_REQUEST_DELETE_USER_FAILURE,
    payload: {},
    error: error,
  };
}
