import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  infoBox: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 20,

    borderWidth: 1,
    borderColor: 'black',
  },
  history: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',

    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  history__maintitle: {
    color: 'black',
    padding: 10,
    fontSize: 24,
  },
  history__contentbox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  history__content__title: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: '200',
  },
  history__content__day: {
    color: 'gray',
  },
});

function History({index, his}) {
  //his 데이터를 받아서 뿌려줌
  return (
    <View style={styles.history__contentbox}>
      <View>
        <Text style={styles.history__content__title}>{his.keyword}</Text>
      </View>
    </View>
  );
}

export default History;
