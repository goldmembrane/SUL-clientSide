import React, {useState} from 'react';
import {
  SafeAreaView,
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
import css from './signCss';

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
    fontSize: 50,
    fontWeight: '200',
    color: '#ffffff',
  },
  buttonText: {
    fontSize: 24,
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
  ...css,
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
        if (data.status === 201) {
          Alert.alert(
            `회원가입 되었습니다. 
로그인 페이지로 이동합니다.`,
            [{text: '확인', onPress: () => navigation.navigate('signin')}],
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
          Alert.alert('ERROR', '회원가입에 문제가 있습니다', [], {
            cancelable: false,
          });
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
    if (str.length < 2) {
      setIdmsg('아이디를 2자 이상 입력해 주세요');
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
    <ImageBackground
      source={require('../../assets/background/loginBackground1.jpg')}
      style={styles.bgImage}>
      <TouchableWithoutFeedback onPress={_onPressEmptySpace}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <View style={[styles.row, styles.header]}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>SUL team</Text>
            </View>
            <View style={styles.main}>
              <TextInput
                autoFocus={true}
                style={styles.inputBox}
                underlineColorAndroid="'rgba(0, 0,0,0.5)',"
                placeholder="Email"
                placeholderTextColor="'rgba(255, 255,255,0.8)',"
                selectionColor="#fff"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => {
                  setEmail(text);
                  chkEmail(text);
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
                placeholderTextColor="'rgba(255, 255,255,0.8)',"
                autoCapitalize="none"
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
                placeholderTextColor="'rgba(255, 255,255,0.8)',"
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
                placeholderTextColor="'rgba(255, 255,255,0.8)',"
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
                onPress={() => navigation.navigate('signin')}>
                <Text style={styles.buttonText}>로그인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

export default signUp;
