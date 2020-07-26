import React from 'react';

import 'react-native-gesture-handler';

import Index from './src/component/index';

// redux create store
import {createStore} from 'redux';
import rootReducer from './src/store/modules';
import {Provider} from 'react-redux';

// 스토어 만들기
const store = createStore(rootReducer);
// 현재값 확인
console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
