import {types} from '../actions/types';

const initialState = {
  loading: false,
  photos: [],
  error: {},
};

export default photosReducer= (state = initialState, {type, payload}) => {
  switch (type) {
    // Set loading
    case types.SEND_REQUEST_GET_ALL_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    // Get todos
    case types.SEND_REQUEST_GET_ALL_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: payload,
        loading: false,
      };
    // Set todo title from user that gonna input a title in form
    case types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE:
      return {
        ...state,
        photos: {},
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
