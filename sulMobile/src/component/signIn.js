import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
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

function signIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validata, setValidata] = useState(false);
  const [errmsg, setErrmsg] = useState('');
  const [passmsg, setPassmsg] = useState('');
  // let errText = null;
  function fetchSignIn(errmsg, password) {
    if (errmsg.length > 0 || password.length < 4) {
      return;
    }
    console.log('signin start');
    const apiUrl = 'http://localhost:3000';
    const userInfo = {
      email,
      password,
    };
    axios
      .post(apiUrl + '/users/signIn', userInfo)
      .then((data) => {
        if (data.status === 200) {
          Alert.alert('로그인되었습니다');
          // props.navigtion.navigate('Home')
        } else {
          Alert.alert('입력정보가 올바르지 않습니다');
        }
      })
      .catch((e) => {
        console.log(e, 'err');
        Alert.alert('error');
      });
  }
  function chkPassword(str) {
    if (str.length < 4) {
      setPassmsg('비밀번호를 입력해 주세요');
    } else {
      setPassmsg('');
    }
    return;
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
  return (
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => fetchSignIn(errmsg, password)}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

export default signIn;
