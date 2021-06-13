import {types} from './types';

export function fetchPhotoData(data) {
  return {
    type: types.SEND_REQUEST_GET_ALL_PHOTOS,
    payload: data,
  };
}

export function fetchPhotoSuccess(photos) {
  return {
    type: types.SEND_REQUEST_GET_ALL_PHOTOS_SUCCESS,
    payload: photos,
  };
}

export function fetchPhotoFailure(error) {
  return {
    type: types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE,
    payload: {},
    error: error,
  };
}
