import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  titleBox: {
    width: '85%',
    height: '10%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export const AnalysisButton = () => (
  <View style={styles.titleBox}>
    <Text style={styles.title}>분석하기</Text>
  </View>
);
