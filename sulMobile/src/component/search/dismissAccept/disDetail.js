import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import goDetailFuntion from '../../helper/goDetailFuntion';
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
    flex: 1,
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'right',
    paddingHorizontal: 16,
  },
  list__contentbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    marginHorizontal: 10,
    borderTopColor: '#E4E4E4',
    borderTopWidth: 1,
  },
  list__contentbox__judi: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 40,
    borderWidth: 0.5,
    borderColor: 'rgba(50,50,50,0.2)',
    borderRadius: 50,
  },
  dismiss: {
    fontWeight: '200',
    color: 'red',
    opacity: 0.6,
  },
  list__contentbox__law: {
    flex: 9,
  },
  list__title: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    fontWeight: '300',
  },
  list__subtitle: {
    color: 'rgba(50, 50, 50,1)',
    fontWeight: '200',
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
  };

  const arr = [];
  for (let i = 0; i < disMissData.length; i++) {
    if (i > 49) {
      break;
    }
    arr.push(
      <View style={[styles.list__contentbox]} key={'acc' + i}>
        <View style={styles.list__contentbox__judi}>
          <Text style={styles.dismiss}>기각</Text>
        </View>
        <View style={styles.list__contentbox__law}>
          <Text
            style={styles.list__title}
            onPress={() => goDetail(disMissData[i].accept)}>
            {disMissData[i].title}
          </Text>
          <Text style={styles.list__subtitle}>{disMissData[i].subtitle}</Text>
        </View>
      </View>,
    );
  }
  return (
    <ScrollView>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            flex: 2,
            fontSize: 18,
            textAlign: 'left',
            fontWeight: '200',
            paddingHorizontal: 16,
            overflow: 'hidden',
            // paddingLeft: WIDTH / 10,
          }}>
          {props.searchKeyword}
        </Text>
        <Text style={styles.title}>총 {disMissData.length}건</Text>
      </View>
      {arr}
    </ScrollView>
  );
}

export default DisDetail;
