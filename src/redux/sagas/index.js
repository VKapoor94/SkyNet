import {spawn} from 'redux-saga/effects';

// Sagas
import contactSaga from './users-saga';

// Export the root saga
export default function* rootSaga() {
  yield spawn(contactSaga);
}
