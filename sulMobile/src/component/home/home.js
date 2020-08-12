import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground
        source={require('../../../assets/background/mainBackground1.jpg')}
        style={styles.bgImage}>
        <View style={styles.top}>
          <Text style={styles.logo}>SUL team</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text}>{`     당신의 
     소송 파트너`}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  top: {flex: 1, justifyContent: 'space-around', alignItems: 'center'},
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 50,
    color: '#ffffff',
    fontWeight: '100',
  },
  text: {
    flex: 2,
    height: '50%',
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '300',
    paddingLeft: 30,
  },
});
