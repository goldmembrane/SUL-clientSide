import {delay} from 'redux-saga';
import {call, put, takeEvery, takeLatest, all} from 'redux-saga/effects';
import {REQUEST_API_DATA} from './actions';
// import {fetchData} from './api';
import {fetchDismiss} from '../../component/helper/fetchDismissApi';
import {fetchAcc} from '../../component/helper/fetchDismissApi';
import {fetchHello} from './ex';
import {putDisMiss} from './dismissModule';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchDismiss, action.text);
    // const data = yield call(fetchHello);
    console.log(data.data, 'yield!!!');
    // yield put(putDisMiss(data.data));
    yield put({type: 'DISSMISS', dismiss: data.data});
    const aData = yield call(fetchAcc, action.text);
    yield put({type: 'ACC', acc: aData.data});
    yield delay(8000);
    yield put({type: 'ISLODING', isLoding: false});
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
export default function* mySaga(action) {
  yield takeEvery(REQUEST_API_DATA, getApiData);
}
