import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

function LodingAnimation() {
  return (
    <View>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require('../helper/flyLoding.json')}
        animationStyle={styles.lottie}
        speed={1}
      />
      <Text style={{fontSize: 40}}>Loding...... </Text>
    </View>
  );
}

export default LodingAnimation;
