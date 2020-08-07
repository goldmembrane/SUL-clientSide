import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {REQUEST_API_DATA} from './actions';
// import {fetchData} from './api';
import {fetchDismiss} from '../../component/helper/fetchDismissApi';

import {putDisMiss} from './dismissModule';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchDismiss, action.text);
    // console.log(data.data, 'yield!!!');
    // yield put(putDisMiss(data.data));
    // yield put({type: 'DISSMISS', dismiss: data.data});
  } catch (e) {
    console.log(e, 'saga failed');
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, getApiData);
}
