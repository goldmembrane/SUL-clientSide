import {useDispatch} from 'react-redux';
import {isLoggedin} from '../store/modules/counter';

export default function useConfirmLogin() {
  const dispatch = useDispatch();
  const onSignin = (bool) => dispatch(isLoggedin(bool));
  return onSignin;
}
