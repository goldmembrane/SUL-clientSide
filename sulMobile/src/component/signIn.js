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
import {fetchSignIn} from './helper/fetchApi';
import useConfirmLogin from '../hooks/useConfirmLogin';
import css from './signCss';

const styles = StyleSheet.create({
  header: {flex: 1},
  bgImage: {width: '100%', height: '100%'},
  titleBox: {
    flex: 1.3,
    // justifyContent: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nullBox__top: {
    flex: 0.3,
  },
  nullBox: {
    flex: 0.0,
  },
  blankBox: {
    flex: 1.5,
  },
  blankBox__bottom: {
    flex: 0.5,
  },
  main: {
    flex: 3.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '200',
    color: '#ffffff',
  },
  msgBox: {
    width: 300,
    height: 30,
  },
  //inputbox, login, signup Box 는 css에
  buttonText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
  errmsg: {
    fontSize: 16,
    fontWeight: '300',
    color: 'red',
  },
  ...css,
});

function signIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validata, setValidata] = useState(false);
  const [errmsg, setErrmsg] = useState('');
  const [passmsg, setPassmsg] = useState('');
  // Custom hook
  const onConfirmLogin = useConfirmLogin();

  function toFetchSignIn(email, password) {
    if (!chkEmail(email) || !chkPassword(password)) {
      return;
    }
    fetchSignIn(email, password)
      .then((data) => {
        if (data.status === 200) {
          // Alert.alert('로그인되었습니다');
          Alert.alert('로그인 하였습니다.', '');
          onConfirmLogin(true);
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          Alert.alert('아이디나 비밀번호가 맞지 않습니다.');
        } else {
          Alert.alert(
            '존재하지 않는 회원입니다.',

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
    <ImageBackground
      source={require('../../assets/background/loginBackground1.jpg')}
      style={styles.bgImage}
      // resizeMethod="cover"
    >
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={_onPressEmptySpace}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <View style={[styles.row, styles.header]}>
              <View style={styles.nullBox__top}></View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>SUL team</Text>
              </View>
              <View style={styles.nullBox}></View>
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
                  placeholderTextColor="'rgba(255, 255,255,0.8)',"
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
                  style={styles.loginButton}
                  onPress={() => toFetchSignIn(email, password)}>
                  <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('signup')}>
                  <Text style={styles.buttonText}>회원가입</Text>
                </TouchableOpacity>
                <View style={styles.blankBox__bottom}></View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default signIn;
