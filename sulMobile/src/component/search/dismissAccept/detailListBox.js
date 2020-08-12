import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import goDetailFuntion from './goDetailFuntion';
import {senTenCing} from '../../../store/modules/sentencing';
import {isLoding} from '../../../store/modules/loding';

const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  header: {marginTop: 70, justifyContent: 'flex-end', backgroundColor: 'white'},
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    textAlign: 'right',
    paddingHorizontal: 16,
    paddingVertical: 5,
    color: 'blue',
  },
  textBox: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    fontSize: 16,
  },
  titleBox: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 5,
  },
});

function AccDetail(props) {
  const dispatch = useDispatch();
  let accData = useSelector((state) => state.accModule.acc);

  const goDetail = async (text) => {
    dispatch(isLoding(true));
    goDetailFuntion(text)
      .then((data) => {
        dispatch(senTenCing(data));
        props.setIsDetail(true);
        dispatch(isLoding(false));
      })
      .catch((e) => {
        dispatch(isLoding(false));
      });
  };
  const arr = [];
  for (let i = 0; i < accData.length; i++) {
    if (i > 49) {
      break;
    }
    arr.push(
      <Text style={styles.textBox}>
        <Text
          key={i}
          style={styles.textBox}
          onPress={() => goDetail(accData[i].accept)}>
          {i + 1} : {accData[i].title}
        </Text>
        <Text key={'i' + i}></Text>
      </Text>,
    );
  }
  return (
    <ScrollView>
      <Text style={styles.title}>총 : {accData.length}건</Text>
      {arr}
    </ScrollView>
  );
}

export default AccDetail;
