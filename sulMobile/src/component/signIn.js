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
import {fetchSignIn} from './helper/fetchApi';

const styles = StyleSheet.create({
  header: {flex: 1},
  bgImage: {width: '100%', height: '100%'},
  titleBox: {
    flex: 1.3,
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
  msgBox: {
    width: 300,
    height: 30,
  },
  blankBox: {
    width: 300,
    height: 150,
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
  errmsg: {
    fontSize: 16,
    fontWeight: '300',
    color: 'red',
  },
});

function signIn({onSignin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validata, setValidata] = useState(false);
  const [errmsg, setErrmsg] = useState('');
  const [passmsg, setPassmsg] = useState('');
  // let errText = null;

  const handleSignin = () => {
    onSignin(true);
  };
  function toFetchSignIn(email, password) {
    if (!chkEmail(email) || !chkPassword(password)) {
      return;
    }
    fetchSignIn(email, password)
      .then((data) => {
        if (data.status === 200) {
          // Alert.alert('로그인되었습니다');
          Alert.alert(
            '로그인 하였습니다.',
            '',
            // [{text: '확인', onPress: () => navigation.navigate('Home')}],
            {cancelable: false},
          );
          handleSignin();
          // props.navigtion.navigate('Home')
        } else {
          Alert.alert('입력정보가 올바르지 않습니다');
        }
      })
      .catch((e) => {
        // Alert.alert(
        //   'error',
        //   '로그인에 문제가 있습니다',
        //   [{text: '확인', onPress: () => navigation.navigate('Home')}],
        //   {cancelable: false},
        // );
        if (e.response.status === 404) {
          Alert.alert('아이디나 비밀번호가 맞지 않습니다.');
        } else {
          Alert.alert(
            'error',
            '로그인에 문제가 있습니다',
            // [{text: '확인', onPress: () => navigation.navigate('Home')}],
            {cancelable: false},
          );
        }
      });
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
  function chkEmail(str) {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(str) === false) {
      setErrmsg('이메일을 입력해 주세요');
    } else {
      setErrmsg('');
    }
    return regExp.test(str) ? true : false;
  }
  _onPressEmptySpace = () => {
    Keyboard.dismiss();
  };
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
              <Text style={styles.title}>SUL team</Text>
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
                  this.password.focus();
                }}
                blurOnSubmit={false}
              />
              <View style={styles.msgBox}>
                <Text style={styles.errmsg}>{errmsg}</Text>
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
              />
              <View style={styles.msgBox}>
                <Text style={styles.errmsg}>{passmsg}</Text>
              </View>
              <View style={styles.blankBox}></View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>회원가입</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => toFetchSignIn(email, password)}>
                <Text style={styles.buttonText}>로그인</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default signIn;
