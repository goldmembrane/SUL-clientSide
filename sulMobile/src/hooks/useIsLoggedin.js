import {useSelector} from 'react-redux';

export default function useIsLoggedin() {
  const isLoggedin = useSelector((state) => state.counter.isLoggedin);
  return isLoggedin;
}
