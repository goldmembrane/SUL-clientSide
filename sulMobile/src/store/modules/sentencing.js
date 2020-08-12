// 액션 타입 정의
const SENTENCING = 'SENTENCING';

// 액션 생성함수 정의
export const senTenCing = (data) => ({
  type: SENTENCING,
  data,
});

// 초기상태 정의
const initialState = {
  sentencing: {},
};

// 리듀서 작성
export default function sentencing(state = initialState, action) {
  switch (action.type) {
    case SENTENCING:
      return {
        ...state,
        sentencing: action.data,
      };

    default:
      return state;
  }
}
