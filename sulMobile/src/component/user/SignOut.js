import React from 'react';
import {StyleSheet, View, Text, Dimensions, Alert} from 'react-native';
import {postSignOut} from '../helper/fetchApi';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
const styles = StyleSheet.create({
  profileInfoBox__logout: {
    padding: 16,
    marginRight: WIDTH / 12,
    textAlign: 'right',
    fontSize: 16,
  },
});
function SignOut({navigation}) {
  function goSignOut() {
    postSignOut().then(() => {
      Alert.alert(
        '로그아웃 하였습니다.',
        '',
        [{text: '확인', onPress: () => navigation.navigate('Home')}],
        {cancelable: false},
      );
    });
    //navigation.navigate('Home')
  }
  return (
    <Text style={styles.profileInfoBox__logout} onPress={goSignOut}>
      Logout
    </Text>
  );
}

export default SignOut;
