import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchKeyGet} from '../helper/fetchKeyWord';
import {isLoding} from '../../store/modules/loding';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <Ionicons name="refresh-outline" size={20} onPress={refreshKeyWord} />
    </View>
  );
}

export default RefreshButton;
