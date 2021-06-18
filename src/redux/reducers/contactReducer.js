import {types} from '../actions/types';

const initialState = {
  loading: false,
  user: [],
  error: {},
};

export default contactReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SEND_REQUEST_GET_ALL_USER:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_REQUEST_GET_ALL_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case types.SEND_REQUEST_GET_ALL_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: payload,
        loading: false,
      };
    case types.DELETE_DATA_FROM_STORE:
      return {
        ...state,
        user: state.user.filter(item => item.id !== payload),
      };
    default:
      return state;
  }
};
