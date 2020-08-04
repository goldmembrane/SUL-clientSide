import React from 'react';
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchJudicial} from '../helper/fetchApi';
// import {fetchJudicialGet} from '../helper/fetchApi';
import {fetchDismiss} from '../helper/fetchDismissApi';
import {fetchKeyPost} from '../helper/fetchKeyWord';
import {isLoding} from '../../store/modules/loding';

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  textInputBox: {
    width: '85%',
    height: 50,
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    // borderRadius: 25,
    paddingHorizontal: 16,
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
    dispatch(isLoding(true));
    props.setIsDetail(false);
    props.setIsAnalysis(false);
    // const waiting = await fetchJudicial(props.searchText);
    fetchJudicial(props.searchText)
      // fetchJudicialGet(props.searchText)
      .then(async (data) => {
        // props.setLawData(fakeData);
        // console.log(data.data, 'data changettt');
        // let parseData = JSON.parse(data.data)

        // console.log(data.data.judicate, 'data judicate changettt');
        // console.log(typeof data.data, 'data judicate[0]!');
        // console.log(data.data.title, 'data title changettt');
        // console.log(data.data, 'number?????');

        function regExp_test(str) {
          //함수를 호출하여 특수문자 검증 시작.
          let result = '';
          var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
          if (regExp.test(str)) {
            result = str.replace(regExp, '');
            //특수문자를 대체. ""
            console.log('특수문자 제거. ==>' + result);
            //특수문자 제거. ==>20171031
          } else {
            result = str;
            console.log('특수문자 없음 ' + str);
          }
          return result;
        }
        let a = data.data.judicate.split(',');
        console.log(a, 'aaaaaa');
        const noSymbol = a.map((ele) => regExp_test(ele));
        if (Array.isArray(noSymbol)) {
          props.setLawData(noSymbol);
        } else {
          props.setLawData([]);
        }
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

        dispatch(isLoding(false));
        props.setSearchKeyword(props.searchText);
        if (data.data.length < 1) {
          Alert.alert('검색 결과가 1건도 없습니다', '');
        }
        // return console.log(data.data, 'search data nothing');

        try {
          //디스미스를 구해야하며 검색결과도 보내줘야함
          const getDismissData = await fetchDismiss(props.searchText);
          const dismissCount = getDismissData.data;
          console.log(dismissCount, 'count!!!');
          //   if( dismissCount)
          // props.setDismiss(dismissCount)
          //결과 유저정보에 저장
          // await fetchKeyPost(dismiss, total, props.searchText)
        } catch (e) {
          console.log(e, 'dismiss');
        }
      })
      // .then(() => fetchGetSearch())
      .catch((e) => {
        dispatch(isLoding(false));
        console.log(e);
        Alert.alert(
          'error',
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
        placeholder="검색하기"
        placeholderTextColor="'rgba(0, 0,0,0.5)',"
        selectionColor="#fff"
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
