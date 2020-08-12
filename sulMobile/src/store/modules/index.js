import {combineReducers} from 'redux';
import counter from './counter';
import sentencing from './sentencing';
import loding from './loding';
import dismissModule from './dismissModule';
import accModule from './accModule';

// 루트 리듀서
export default combineReducers({
  counter,
  sentencing,
  loding,
  dismissModule,
  accModule,
  // 다른 리듀서를 만들면 여기에 넣어서 합쳐줌,
});

/*
  들어오게되는 초기값 : 

  {
      counter: {
          isLoggedin: false,
      },
      // 합치면 초기값이 여기에 객체 형태로 들어옴
  }
*/
