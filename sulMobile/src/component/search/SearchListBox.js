import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';
import {senTenCing} from '../../store/modules/sentencing';
import {isLoding} from '../../store/modules/loding';
import goDetailFuntion from '../helper/goDetailFuntion';

const styles = StyleSheet.create({
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
  acc: {
    fontWeight: '200',
    color: 'green',
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
//한 줄에 두개 씩 박스를 만들어냄
//인풋으로 배열을 받아야함

//제목과 날짜를 보여줌
//클릭하면 디테일을 보여줌
//리스트는 리덕스로 저장하여 되돌아오면 보여줄 수 있음
//원페이지 개념으로 함. 페이지 이동 개념이 아님 => search에서 ? 를 이용하여 보여주는 내용 변환 큰 사이즈가 될 예정

export const SearchListBox = (props) => {
  //클릭시 크롤링하여 디테일 화면을 보여줌

  const dispatch = useDispatch();

  const goDetail = async (text) => {
    try {
      dispatch(isLoding(true));
      let data = await goDetailFuntion(text);
      props.setIsDetail(true);
      dispatch(senTenCing(data));
      dispatch(isLoding(false));
    } catch (e) {
      dispatch(isLoding(false));
      console.log(e, 'err');
    }
  };
  return (
    <View style={[styles.list__contentbox]}>
      <View style={styles.list__contentbox__judi}>
        <Text
          style={[
            styles[
              props.law.accept ? 'acc' : props.law.dismiss ? 'dismiss' : ''
            ],
          ]}>
          {props.law.accept ? `승인` : props.law.dismiss ? `기각` : ''}
        </Text>
      </View>
      <View style={styles.list__contentbox__law}>
        <Text
          style={styles.list__title}
          onPress={() =>
            goDetail(
              props.law.accept
                ? props.law.accept
                : props.law.dismiss
                ? props.law.dismiss
                : '',
            )
          }>
          {props.law?.title}
        </Text>
        <Text style={styles.list__subtitle}>{props.law?.subtitle}</Text>
      </View>
    </View>
  );
};
