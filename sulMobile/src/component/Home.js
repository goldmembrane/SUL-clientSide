import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
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
});

function Home() {
  return (
    <ImageBackground
      source={require('../img/home1.png')}
      style={styles.bgImage}></ImageBackground>
  );
}

export default Home;
