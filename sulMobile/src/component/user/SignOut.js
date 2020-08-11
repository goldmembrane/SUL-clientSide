import React from 'react';
import {StyleSheet, View, Text, Dimensions, Alert} from 'react-native';
import {postSignOut} from '../helper/fetchApi';
import useConfirmLogin from '../../hooks/useConfirmLogin';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
const styles = StyleSheet.create({
  profileInfoBox__logout: {
    padding: 16,
    marginRight: WIDTH / 12,
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '300',
  },
});

function SignOut({navigation}) {
  const onConfirmLogin = useConfirmLogin();
  function goSignOut() {
    postSignOut().then(() => {
      Alert.alert('로그아웃 하였습니다.', '');
      onConfirmLogin(false);
    });
  }
  return (
    <Text style={styles.profileInfoBox__logout} onPress={goSignOut}>
      Logout
    </Text>
  );
}

export default SignOut;
