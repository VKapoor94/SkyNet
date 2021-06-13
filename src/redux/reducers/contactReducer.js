import {types} from '../actions/types';

const initialState = {
  loading: false,
  user: [],
  error: {},
};

export default contactReducer= (state = initialState, {type, payload}) => {
  switch (type) {
    // Set loading
    case types.SEND_REQUEST_GET_ALL_USER:
      return {
        ...state,
        loading: true,
      };
    // Get todos
    case types.SEND_REQUEST_GET_ALL_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    // Set todo title from user that gonna input a title in form
    case types.SEND_REQUEST_GET_ALL_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
