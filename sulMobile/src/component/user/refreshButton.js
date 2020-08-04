import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchKeyGet} from '../helper/fetchKeyWord';
import {isLoding} from '../../store/modules/loding';
import Icon from 'react-native-vector-icons/FontAwesome';

function RefreshButton({setHistoryData}) {
  const dispatch = useDispatch();

  const refreshKeyWord = () => {
    dispatch(isLoding(true));
    fetchKeyGet()
      .then((keyData) => {
        console.log(keyData.data, 'keyData!!');
        if (keyData.data.length > 0) {
          setHistoryData(keyData.data);
        }
        setTimeout(() => {
          dispatch(isLoding(false));
        }, 500);
      })
      .catch((e) => {
        dispatch(isLoding(false));
      });
  };

  return (
    <View>
      {/* <Text
        style={{
          alignSelf: 'center',
          paddingVertical: 12,
          fontSize: 20,
        }}
        onPress={refreshKeyWord}>
        refresh
      </Text> */}
      <Icon name="refresh" size={20} color="black" onPress={refreshKeyWord} />
    </View>
  );
}

export default RefreshButton;
