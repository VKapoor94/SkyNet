import {types} from './types';

export function deleteUserFromStore(data) {
  return {
    type: types.DELETE_DATA_FROM_STORE,
    payload: data.id,
  };
}

export function deletePhotoFromStore(data) {
  return {
    type: types.DELETE_PHOTO_FROM_STORE,
    payload: data.id,
  };
}
