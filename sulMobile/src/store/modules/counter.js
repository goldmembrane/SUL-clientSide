// 액션 타입 정의
const IS_LOGGEDIN = 'counter/IS_LOGGEDIN';

// 액션 생성함수 정의
export const isLoggedin = (bool) => ({
  type: IS_LOGGEDIN,
  bool,
});

// 초기상태 정의
const initialState = {
  bool: false,
};

// 리듀서 작성
export default function counter(state = initialState, action) {
  switch (action.type) {
    case IS_LOGGEDIN:
      return {
        ...state,
        bool: action.bool,
      };

    default:
      return state;
  }
}
