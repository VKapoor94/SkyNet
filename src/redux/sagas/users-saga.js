import {put, call, takeEvery} from 'redux-saga/effects';
import {types} from '../actions/types';
import {
  getAllUsers,
  getAllPhotos,
  getDetailsofUser,
  getPhotoofUser,
  deleteUserFromList,
} from '../apis/contactApi';
function* getUsers() {
  try {
    const user = yield call(getAllUsers);
    yield put({type: types.SEND_REQUEST_GET_ALL_USER_SUCCESS, payload: user});
  } catch (err) {
    yield put({type: types.SEND_REQUEST_GET_ALL_USER_FAILURE, payload: error});
    console.log(err);
  }
}

function* getPhotos() {
  try {
    const photos = yield call(getAllPhotos);
    yield put({
      type: types.SEND_REQUEST_GET_ALL_PHOTOS_SUCCESS,
      payload: photos,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}

function* getDetails({payload, error}) {
  try {
    const user = yield call(getDetailsofUser, payload);
    yield put({
      type: types.SEND_REQUEST_GET_DETAILS_USER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_DETAILS_USER_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}

function* getPhoto({payload, error}) {
  try {
    const user = yield call(getPhotoofUser, payload);
    yield put({
      type: types.SEND_REQUEST_GET_DETAILS_PHOTOS_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_DETAILS_PHOTOS_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}

function* deleteUser({payload, error}) {
  try {
    const user = yield call(deleteUserFromList, payload);
    yield put({
      type: types.SEND_REQUEST_DELETE_USER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}

export default function* contactSaga() {
  yield takeEvery(types.SEND_REQUEST_GET_ALL_USER, getUsers);
  yield takeEvery(types.SEND_REQUEST_GET_ALL_PHOTOS, getPhotos);
  yield takeEvery(types.SEND_REQUEST_GET_DETAILS_USER, getDetails);
  yield takeEvery(types.SEND_REQUEST_GET_DETAILS_PHOTOS, getPhoto);
  yield takeEvery(types.SEND_REQUEST_DELETE_USER, deleteUser);
}
