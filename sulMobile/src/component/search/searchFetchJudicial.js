import React from 'react';
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native';
import {fetchJudicial} from '../helper/fetchApi';
import {fetchJudicialGet} from '../helper/fetchApi';

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

function SearchFetchJudicial(props) {
  //   function searchHandler() {
  //     if (props.searchText.length > 0) {
  //       props.setLawData(fakeData);
  //     } else {
  //       props.setLawData([]);
  //     }
  //   }
  function fetchGetSearch() {
    return fetchJudicialGet('폭력')
      .then((data) => {
        console.log(data.data, 'get data');
        return;
      })
      .catch((e) => {
        Alert.alert(
          'error',
          '',
          //   [{text: '확인', onPress: () => navigation.navigate('Home')}],
          {cancelable: false},
        );
        return;
      });
  }
  function searchHandler() {
    if (props.searchText.length < 0) {
      return;
    }
    fetchJudicial('폭력')
      .then((data) => {
        return console.log(data.data, 'search data');
      })
      .then(() => fetchGetSearch())
      .catch((e) => {
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
