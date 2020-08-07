import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';
import ParserDetail from './parserDetail';
import {senTenCing} from '../../store/modules/sentencing';
import {isLoding} from '../../store/modules/loding';
import goDetailFuntion from '../helper/goDetailFuntion';
// const styles = StyleSheet.create({
//   rowBox: {
//     width: '100%',
//     height: '25%',
//     justifyContent: 'center',
//     alignContent: 'space-around',
//   },
//   box: {
//     width: '40%',
//     height: '35%',
//     justifyContent: 'center',
//     backgroundColor: 'gray',
//     marginVertical: 10,
//   },
//   title: {
//     fontSize: 20,
//     color: 'white',
//   },
// });

// export const SearchListBox = (props) => (

//   <View style={styles.box}>
//     <Text style={styles.title}>{props.law?.title}</Text>
//   </View>
// );

const styles = StyleSheet.create({
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
  history__contentbox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  dismiss: {
    backgroundColor: 'rgba(255, 56, 56,0.2)',
  },
  acc: {
    backgroundColor: 'rgba(126, 255, 245,0.2)',
  },
  list__contentbox: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    // backgroundColor: '#C4C4C4',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  list__title: {
    fontSize: 16,
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

  // const goDetail = async (text) => {
  //   console.log(text, 'searchListBox');
  //   // const text = e._dispatchInstances.memoizedProps.children;
  //   // console.log(text, 'value??');
  //   // if (typeof text !== 'string' || text == '') {
  //   //   console.log('not');
  //   //   return;
  //   // }
  //   try {
  //     dispatch(isLoding(true));
  //     let a = await ParserDetail(text);
  //     //디테일 화면으로 넘어감
  //     props.setIsDetail(true);
  //     console.log(a, 'aaa');
  //     //redux start!!!
  //     dispatch(senTenCing(a));
  //     dispatch(isLoding(false));
  //   } catch (e) {
  //     dispatch(isLoding(false));
  //     console.log(e, 'err');
  //   }
  // };
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
    <View
      style={[
        styles.list__contentbox,
        styles[props.law.accept ? 'acc' : props.law.dismiss ? 'dismiss' : ''],
      ]}>
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
        {props?.index + 1} : {props.law?.title}
        {/* {props.law.title.slice(0, 28)}
        {props.law.subtitle.slice(5, 45)} */}
      </Text>
    </View>
    /* <View>
          <Text>판례정보</Text>
        </View> */

    /* <Text onPress={(text) => goDetail(text)}>77690</Text> */

    /* <Text>{day}</Text>
        {content.map((ele, index) => {
          return <Text key={index}>{ele}</Text>;
        })} */
  );
};

// <View style={styles.history}>
//   <View style={styles.history__contentbox}>
//     <View style={{paddingLeft: 20, width: '85%'}}>
//       <Text style={styles.history__content__title}>
//         대법원 1980. 5. 20. 선고 80도306 전원합의체 판결 ★
//         [(가)내란목적살인,(나)내란수괴
//       </Text>
//       <View style={{flexDirection: 'row'}}>
//         <Text style={{marginRight: 10}}>폭력으로 다리 피해</Text>
//         <Text style={styles.history__content__day}>20.07.26</Text>
//       </View>
//     </View>
//     <View style={{paddingRight: 20}}>
//       <Text style={styles.history__content__Percentage}>25%</Text>
//     </View>
//   </View>
// </View>;
