import React from 'react';
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native';
import {fetchJudicial} from '../helper/fetchApi';
import {fetchJudicialGet} from '../helper/fetchApi';
import fakeData from './fakeDataSearch/fakeData';

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
    props.setIsDetail(false);
    fetchJudicial(props.searchText)
      .then((data) => {
        // props.setLawData(fakeData);
        props.setLawData(data.data);
        return console.log(data.data, 'search data');
      })
      // .then(() => fetchGetSearch())
      .catch((e) => {
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
