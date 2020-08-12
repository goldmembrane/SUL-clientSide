import React from 'react';

import 'react-native-gesture-handler';

import Index from './src/component/index';

// redux create store
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/store/modules';
import {Provider} from 'react-redux';
import loggerMiddleware from './loggerMiddleware';

// 스토어 만들기
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
// 현재값 확인
// console.log(store.getState());
const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
