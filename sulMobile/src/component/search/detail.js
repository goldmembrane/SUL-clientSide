import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function Detail() {
  let sentencingData = useSelector((state) => state.sentencing.sentencing);

  const styles = StyleSheet.create({
    content__title: {
      fontSize: 24,
      marginHorizontal: 15,
      fontWeight: '200',
      textAlign: 'center',
    },
    content__day: {
      fontSize: 14,
      color: '#3C7EBC',
      textAlign: 'center',
    },
    content__minititle: {
      fontSize: 16,
      fontWeight: '700',
      paddingHorizontal: 5,
    },
    content__text: {
      fontSize: 16,
      fontWeight: '200',
      paddingHorizontal: 10,
      paddingBottom: 16,
    },
  });
  const arr = [
    '【원고, 피항소인】',
    '【피고, 항소인】',
    '【제1심판결】',
    '【변론종결】',
    '【주 문】',
    '【청구취지 및 항소취지】',
    '【이 유】',
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Text style={styles.content__title}>{sentencingData?.title}</Text>
          <Text style={styles.content__day}>{`${sentencingData?.day}`}</Text>
          {sentencingData?.data?.map((content, index) => (
            <View key={index}>
              <Text style={styles.content__minititle}>{arr[index]}</Text>
              <Text style={styles.content__text}>{content}</Text>
            </View>
          ))}
          <Text style={styles.content__text}>{sentencingData?.justice}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Detail;
