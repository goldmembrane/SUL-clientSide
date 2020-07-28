import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  rowBox: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignContent: 'space-around',
  },
  box: {
    width: '40%',
    height: '35%',
    justifyContent: 'center',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

//한 줄에 두개 씩 박스를 만들어냄
//인풋으로 배열을 받아야함
export const SearchListBox = (props) => (
  // <View>
  //   <Text>
  //     hdddddddddd ddddddddd
  //     ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  //   </Text>
  // </View>
  <View style={styles.box}>
    <Text style={styles.title}>{props.law?.title}</Text>
  </View>
);
