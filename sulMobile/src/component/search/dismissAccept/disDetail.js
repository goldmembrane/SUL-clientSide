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
    // justifyContent: 'center',
    backgroundColor: 'white',
    // width: '100%',
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
    // paddingBottom: 5,
    fontSize: 16,
  },
  titleBox: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 5,
  },
});

function DisDetail(props) {
  const dispatch = useDispatch();
  let disMissData = useSelector((state) => state.dismissModule.dismiss);

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
    // text = text.slice(text.indexOf('precSeq=') + 8, text.indexOf('&mode=0'));
    // // console.log(text);
    // try {
    //   dispatch(isLoding(true));
    //   let a = await ParserDetail(text);
    //   //디테일 화면으로 넘어감
    //   props.setIsDetail(true);
    //   //redux start!!!
    //   dispatch(senTenCing(a));
    //   dispatch(isLoding(false));
    // } catch (e) {
    //   dispatch(isLoding(false));
    //   console.log(e, 'err');
    // }
  };

  // const arr = disMissData.map((ele, index) => (
  //   <Text key={index}>{ele.title}</Text>
  // ));
  const arr = [];
  for (let i = 0; i < disMissData.length; i++) {
    if (i > 49) {
      break;
    }
    arr.push(
      <Text style={styles.textBox}>
        <Text
          key={i}
          style={styles.textBox}
          onPress={() => goDetail(disMissData[i].dismiss)}>
          {i + 1} : {disMissData[i].title}
        </Text>
        <Text key={'dismiss' + i}></Text>
      </Text>,
    );
  }
  return (
    <ScrollView>
      <Text style={styles.title}>총 : {disMissData.length}건</Text>
      {arr}
    </ScrollView>
  );
}

export default DisDetail;
