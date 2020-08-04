// 액션 타입 정의
const DISSMISS = 'dismissModule/DISSMISS';

// 액션 생성함수 정의
export const putDisMiss = (arr) => ({
  type: DISSMISS,
  arr,
});

// 초기상태 정의
const initialState = {
  dismiss: [],
};

// 리듀서 작성
export default function dismissModule(state = initialState, action) {
  switch (action.type) {
    case DISSMISS:
      return {
        ...state,
        dismiss: action.arr,
      };

    default:
      return state;
  }
}
