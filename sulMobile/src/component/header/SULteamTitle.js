import React from 'react';

import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  // header: {marginTop: 70, justifyContent: 'flex-end', backgroundColor: 'white'},
  header: {
    marginTop: HEIGHT / 14,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  titleBox: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '200',
    fontSize: 30,
    color: 'black',
  },
});
// title: {
//   fontWeight: '200',
//   fontSize: 30,
//   color: 'black',
//   marginVertical: 10,
// },
// titleBox: {
//   flex: 1.1,
//   backgroundColor: 'white',
//   justifyContent: 'flex-end',
//   paddingHorizontal: 20,
// },

export default function SULteamTitle() {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.title}>SUL team</Text>
    </View>
  );
}
