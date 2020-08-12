// 액션 타입 정의
const ISLODING = 'loding/ISLODING';

// 액션 생성함수 정의
export const isLoding = (bool) => ({
  type: ISLODING,
  bool,
});

// 초기상태 정의
const initialState = {
  isLoding: false,
};

// 리듀서 작성
export default function loding(state = initialState, action) {
  switch (action.type) {
    case ISLODING:
      return {
        ...state,
        isLoding: action.bool,
      };

    default:
      return state;
  }
}
