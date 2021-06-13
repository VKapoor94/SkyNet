import {types} from '../actions/types';

const initialState = {
  loading: false,
  photo: {},
  error: {},
};

export default singlePhotoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    // Set loading
    case types.SEND_REQUEST_GET_DETAILS_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    // Get todos
    case types.SEND_REQUEST_GET_DETAILS_PHOTOS_SUCCESS:
      return {
        ...state,
        photo: payload,
        loading: false,
      };
    // Set todo title from user that gonna input a title in form
    case types.SEND_REQUEST_GET_DETAILS_PHOTOS_FAILURE:
      return {
        ...state,
        photo: {},
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
