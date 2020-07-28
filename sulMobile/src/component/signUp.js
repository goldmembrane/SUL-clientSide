import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput, TouchableOpacity, Alert} from 'react-native';
import {fetchSignUp} from './helper/fetchApi';

const styles = StyleSheet.create({
  header: {flex: 1},
  bgImage: {width: '100%', height: '100%'},
  titleBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  main: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#ffffff',
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 10,
    // borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 20,
    color: '#ffffff',
    // marginVertical: 10,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#1c313a',

    marginVertical: 10,
    paddingVertical: 13,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: 'gray',

    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
  msgBox: {
    width: 300,
    height: 30,
  },
  errmsg: {
    fontSize: 16,
    fontWeight: '300',
    color: 'red',
  },
});

function signUp({navigation}) {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [emailmsg, setEmailmsg] = useState('');
  const [idmsg, setIdmsg] = useState('');
  const [passmsg, setPassmsg] = useState('');
  const [passConfirmsg, setPassConfirmsg] = useState('');

  function toFetchSignUp(email, id, password, passwordConfirm) {
    if (
      !chkEmail(email) ||
      !chkId(id) ||
      !chkPassword(password) ||
      !chkPasswordConfirm(passwordConfirm)
    ) {
      return;
    }
    fetchSignUp(email, id, password)
      .then((data) => {
        if (data.status === 200) {
          Alert.alert(
            '회원가입 확인',
            '회원가입 되었습니다. 로그인 페이지로 이동합니다',
            [{text: '확인', onPress: () => navigation.navigate('SignIn')}],
            {cancelable: false},
          );
          // props.navigtion.navigate('Home')
        } else {
          Alert.alert(
            'error',
            '회원가입이 되지 않았습니다',
            [{text: '확인', onPress: () => navigation.navigate('Home')}],
            {cancelable: false},
          );
        }
      })
      .catch((e) => {
        console.log(e, 'err');
        if (e.response.status === 409) {
          Alert.alert('이미 존재하는 유저입니다.');
          console.log('err409');
        } else {
          Alert.alert(
            'error',
            '회웍가입에 문제가 있습니다',
            [
              // {text: 'Ask me later', onPress: () => console.warn('Ask me later pressed')},
              // {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
              {text: '확인', onPress: () => navigation.navigate('Home')},
            ],
            {cancelable: false},
          );
        }
      });
  }
  _onPressEmptySpace = () => {
    Keyboard.dismiss();
  };
  function chkEmail(str) {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(str) === false) {
      setEmailmsg('이메일을 입력해 주세요');
    } else {
      setEmailmsg('');
    }
    return regExp.test(str) ? true : false;
  }
  function chkId(str) {
    if (str.length < 4) {
      setIdmsg('아이디를 4자 이상 입력해 주세요');
      return false;
    } else {
      setIdmsg('');
      return true;
    }
  }
  function chkPassword(str) {
    if (str.length < 4) {
      setPassmsg('비밀번호를 4자 이상 입력해 주세요');
      return false;
    } else {
      setPassmsg('');
      return true;
    }
  }
  function chkPasswordConfirm(str) {
    if (password !== str) {
      setPassConfirmsg('두 비밀번호가 다릅니다');
      return false;
    } else {
      setPassConfirmsg('');
      return true;
    }
  }
  return (
    <TouchableWithoutFeedback onPress={_onPressEmptySpace}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={[styles.row, styles.header]}>
          <ImageBackground
            source={require('../img/iu.jpg')}
            style={styles.bgImage}
            // resizeMethod="cover"
          >
            <View style={styles.titleBox}>
              <Text style={styles.title}>I Love IU</Text>
            </View>
            <View style={styles.main}>
              <TextInput
                autoFocus={true}
                style={styles.inputBox}
                underlineColorAndroid="'rgba(0, 0,0,0.5)',"
                placeholder="Email"
                placeholderTextColor="'rgba(255, 255,255,0.5)',"
                selectionColor="#fff"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => {
                  setEmail(text);
                  chkEmail(text);
                  // console.log(email, 'email');
                }}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.id.focus();
                }}
                blurOnSubmit={false}
              />
              <View style={styles.msgBox}>
                <Text style={styles.errmsg}>{emailmsg}</Text>
              </View>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="id"
                placeholderTextColor="'rgba(255, 255,255,0.5)',"
                autoCapitalize="none"
                //"#ffffff"
                selectionColor="#fff"
                returnKeyType="next"
                onChangeText={(text) => {
                  setId(text);
                  chkId(text);
                }}
                ref={(input) => {
                  this.id = input;
                }}
                onSubmitEditing={() => {
                  this.password.focus();
                }}
              />
              <View style={styles.msgBox}>
                <Text style={styles.errmsg}>{idmsg}</Text>
              </View>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="'rgba(255, 255,255,0.5)',"
                returnKeyType="next"
                onChangeText={(text) => {
                  setPassword(text);
                  chkPassword(text);
                }}
                ref={(input) => {
                  this.password = input;
                }}
                onSubmitEditing={() => {
                  this.passwordConfirm.focus();
                }}
              />
              <View style={styles.msgBox}>
                <Text style={styles.errmsg}>{passmsg}</Text>
              </View>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password Confirm"
                secureTextEntry={true}
                placeholderTextColor="'rgba(255, 255,255,0.5)',"
                onChangeText={(text) => {
                  setpasswordConfirm(text);
                  chkPasswordConfirm(text);
                }}
                ref={(input) => {
                  this.passwordConfirm = input;
                }}
              />
              <View style={styles.msgBox}>
                <Text style={styles.errmsg}>{passConfirmsg}</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  toFetchSignUp(email, id, password, passwordConfirm)
                }>
                <Text style={styles.buttonText}>회원가입</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>로그인</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default signUp;
