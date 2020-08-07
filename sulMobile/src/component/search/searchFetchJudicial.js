import React from 'react';
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchJudicial} from '../helper/fetchApi';
// import {fetchJudicialGet} from '../helper/fetchApi';
import {fetchDismiss} from '../helper/fetchDismissApi';
import {fetchAcc} from '../helper/fetchDismissApi';
import {isLoding} from '../../store/modules/loding';
import {putDisMiss} from '../../store/modules/dismissModule';
import {putAcc} from '../../store/modules/accModule';
import disAccMixF from '../helper/disAccMixF';
//redux-saga
import {requestApiData} from '../../store/modules/actions';

const styles = StyleSheet.create({
  inputBox: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  textInputBox: {
    width: '100%',
    height: 45,
    borderRadius: 20,
    // borderRadius: 25,
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'black',
  },
});
//검색창 구현
function SearchFetchJudicial(props) {
  const dispatch = useDispatch();

  //   function searchHandler() {
  //     if (props.searchText.length > 0) {
  //       props.setLawData(fakeData);
  //     } else {
  //       props.setLawData([]);
  //     }
  //   }
  //put 요청 보내기 --> 서버에서 통합됨
  // function fetchGetSearch() {
  //   return fetchJudicialGet(searchText)
  //     .then((data) => {
  //       console.log(data.data, 'get data');
  //       return;
  //     })
  //     .catch((e) => {
  //       Alert.alert(
  //         'error',
  //         '',
  //         //   [{text: '확인', onPress: () => navigation.navigate('Home')}],
  //         {cancelable: false},
  //       );
  //       return;
  //     });
  // }
  function searchHandler() {
    if (props.searchText.length < 1) {
      props.setLawData([]);
      return;
    }
    //로딩 시작
    dispatch(isLoding(true));
    //판결문보기 아님
    props.setIsDetail(false);
    //분석하기 아님
    props.setIsAnalysis(false);
    //전체 보기로
    props.setClickedClassName(['click', 'notClick', 'notClick']);
    // const waiting = await fetchJudicial(props.searchText);
    fetchJudicial(props.searchText)
      // fetchJudicialGet(props.searchText)
      .then(async (data) => {
        // function regExp_test(str) {
        //   //함수를 호출하여 특수문자 검증 시작.
        //   let result = '';
        //   var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
        //   if (regExp.test(str)) {
        //     result = str.replace(regExp, '');
        //     //특수문자를 대체. ""
        //     console.log('특수문자 제거. ==>' + result);
        //     //특수문자 제거. ==>20171031
        //   } else {
        //     result = str;
        //     console.log('특수문자 없음 ' + str);
        //   }
        //   return result;
        // }
        // let a = data.data.judicate.split(',');
        // console.log(a, 'aaaaaa');
        // const noSymbol = a.map((ele) => regExp_test(ele));
        // if (Array.isArray(noSymbol)) {
        //   props.setLawData(noSymbol);
        // } else {
        //   props.setLawData([]);
        // }

        // let b = data.data.title.split(',');
        // console.log(b.length, 'bbbbbb');
        // let c = data.data.subtitle.split(',');
        // console.log(c.length, 'ccccc');

        //어제까지 한것 임시 주석처리 시작!!!
        // if (Array.isArray(data.data)) {
        //   props.setLawData(data.data);
        // } else {
        //   props.setLawData([]);
        // }
        props.setSearchKeyword(props.searchText);
        if (data.data.length < 1) {
          Alert.alert('검색 결과가 1건도 없습니다', '');
        }
        try {
          //디스미스를 구해야하며 검색결과도 보내줘야함
          const getDismissData = await fetchDismiss(props.searchText);
          const dismissCount = getDismissData.data;
          // console.log(dismissCount, 'count!!!');
          if (isArr(dismissCount)) {
            dispatch(putDisMiss(dismissCount));
          } else {
            dispatch(putDisMiss([]));
          }

          // redux-saga
          // dispatch(requestApiData(props.searchText));
          // const dismissCount = useSelector(
          //   (state) => state.dismissModule.dismiss,
          // );

          //accpet 결과도 가져와야 함
          const getAccData = await fetchAcc(props.searchText);
          const accCount = getAccData.data;
          // console.log(accCount, 'count!!!');
          if (isArr(accCount)) {
            dispatch(putAcc(accCount));
          } else {
            dispatch(putAcc([]));
          }
          //mix
          const mixData = disAccMixF(accCount, dismissCount);
          if (Array.isArray(mixData)) {
            props.setLawData(mixData);
          } else {
            props.setLawData([]);
          }
          dispatch(isLoding(false));
          //   if( dismissCount)
          // props.setDismiss(dismissCount)
          //결과 유저정보에 저장
          // await fetchKeyPost(dismiss, total, props.searchText)
          function isArr(arr) {
            if (Array.isArray(arr)) return true;
            return false;
          }
        } catch (e) {
          console.log(e, 'dismiss failed');
          dispatch(isLoding(false));
        }
      })
      // .then(() => fetchGetSearch())
      .catch((e) => {
        dispatch(isLoding(false));
        console.log(e, 'fetch first failed..');
        Alert.alert(
          'fetch first error',
          '',
          //   [{text: '확인', onPress: () => navigation.navigate('Home')}],
          {cancelable: false},
        );
        // if (e.response.status === 404) {
        //   Alert.alert('아이디나 비밀번호가 맞지 않습니다.');
        // } else {
        //   Alert.alert(
        //     'error',
        //     '로그인에 문제가 있습니다',
        //     // [{text: '확인', onPress: () => navigation.navigate('Home')}],
        //     {cancelable: false},
        //   );
        // }
      });
  }
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInputBox}
        autoFocus={true}
        underlineColorAndroid="'rgba(0, 0,0,0.5)',"
        placeholder="검색"
        placeholderTextColor="'rgba(0, 0,0,0.5)',"
        selectionColor="'rgba(0, 0,0,0.5)'"
        autoCapitalize="none"
        onChangeText={(text) => {
          props.setSearchText(text);
        }}
        onSubmitEditing={() => {
          searchHandler();
          //   searchHandler();
          // console.log(lawData, 'lawdata');
        }}
      />
    </View>
  );
}

export default SearchFetchJudicial;
