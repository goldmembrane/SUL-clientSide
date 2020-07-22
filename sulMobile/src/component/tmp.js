import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native';
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

function Tmp() {
  return (
    <View style={[styles.row, styles.header]}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>I Love IU</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="id"
          placeholderTextColor="'rgba(255, 255,255,0.5)',"
          selectionColor="#fff"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="'rgba(255, 255,255,0.5)',"
        />
      </View>
    </View>
  );
}

export default Tmp;
