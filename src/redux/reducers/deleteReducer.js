import {types} from '../actions/types';

const initialState = {
  loading: false,
  user: {},
  error: {},
};

export default deleteReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SEND_REQUEST_DELETE_USER:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_REQUEST_DELETE_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case types.SEND_REQUEST_DELETE_USER_FAILURE:
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
