import {types} from '../actions/types';

const initialState = {
  loading: false,
  photos: [],
  error: {},
};

export default photosReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SEND_REQUEST_GET_ALL_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_REQUEST_GET_ALL_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: payload,
        loading: false,
      };
    case types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE:
      return {
        ...state,
        photos: {},
        error: payload,
        loading: false,
      };
    case types.DELETE_PHOTO_FROM_STORE:
      return {
        ...state,
        photos: state.photos.filter(item => item.id !== payload),
      };
    default:
      return state;
  }
};
