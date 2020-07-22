import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
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
    marginVertical: 10,
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
});

function signUp() {
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setpasswordConfirm] = useState();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={[styles.row, styles.header]}>
        <ImageBackground
          source={require('./iu.jpg')}
          style={styles.bgImage}
          // resizeMethod="cover"
        >
          <View style={styles.titleBox}>
            <Text style={styles.title}>I Love IU</Text>
          </View>
          <View style={styles.main}>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="'rgba(0, 0,0,0.5)',"
              placeholder="Email"
              placeholderTextColor="'rgba(255, 255,255,0.5)',"
              selectionColor="#fff"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => {
                setEmail(text);
                console.log(email, 'email');
              }}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.id.focus();
              }}
              blurOnSubmit={false}
              onSubmitEditing={() => this.password.focus()}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="id"
              placeholderTextColor="'rgba(255, 255,255,0.5)',"
              autoCapitalize="none"
              //"#ffffff"
              selectionColor="#fff"
              returnKeyType="next"
              // onSubmitEditing={() => this.password.focus()}
              ref={(input) => {
                this.id = input;
              }}
              onSubmitEditing={() => {
                this.password.focus();
              }}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="'rgba(255, 255,255,0.5)',"
              // ref={(input) => (this.password = input)}
              returnKeyType="next"
              ref={(input) => {
                this.password = input;
              }}
              onSubmitEditing={() => {
                this.passwordConfirm.focus();
              }}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Password Confirm"
              secureTextEntry={true}
              placeholderTextColor="'rgba(255, 255,255,0.5)',"
              ref={(input) => {
                this.passwordConfirm = input;
              }}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

export default signUp;
