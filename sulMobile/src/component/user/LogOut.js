import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {fsignOut} from '../helper/fetchApi';

const styles = StyleSheet.create({
  profileInfoBox__logout: {
    padding: 16,
    marginRight: WIDTH / 12,
    textAlign: 'right',
    fontSize: 16,
  },
});
function SignOut({navigation}) {
  return <Text style={styles.profileInfoBox__logout}>Logout</Text>;
}

export default SignOut;
