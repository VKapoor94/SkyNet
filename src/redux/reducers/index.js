import {combineReducers} from 'redux';
import contactReducer from './contactReducer';
import photosReducer from './photosReducer';
import detailsReducer from './detailsReducer';
import singlePhotoReducer from './singlePhotoReducer';
import deleteReducer from './deleteReducer';

export default combineReducers({
  contactReducer,
  photosReducer,
  detailsReducer,
  singlePhotoReducer,
  deleteReducer,
});
