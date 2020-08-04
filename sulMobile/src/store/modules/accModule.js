// 액션 타입 정의
const ACC = 'accModule/ACC';

// 액션 생성함수 정의
export const putAcc = (arr) => ({
  type: ACC,
  arr,
});

// 초기상태 정의
const initialState = {
  acc: [],
};

// 리듀서 작성
export default function accModule(state = initialState, action) {
  switch (action.type) {
    case ACC:
      return {
        ...state,
        acc: action.arr,
      };

    default:
      return state;
  }
}
