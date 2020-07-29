import React from 'react';
import {useDispatch} from 'react-redux';
import {isLoggedin} from '../store/modules/counter';
import SignIn from '../component/signIn';

export default function SigninContainer(props) {
  const dispatch = useDispatch();
  const onSignin = (bool) => dispatch(isLoggedin(bool));
  return <SignIn onSignin={onSignin} {...props} />;
}
