import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  analysis__button: {
    width: '70%',
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#82A3D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  analysis__button__text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
});

const AnalysisButton = ({setIsAnalysis, setIsDetail}) => (
  <TouchableOpacity
    style={styles.analysis__button}
    onPress={() => {
      setIsAnalysis(true);
      setIsDetail(false);
    }}>
    <Text style={styles.analysis__button__text}>분석하기</Text>
  </TouchableOpacity>
);
export default AnalysisButton;
