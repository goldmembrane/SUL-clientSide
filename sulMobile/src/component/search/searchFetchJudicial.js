import React from 'react';
import {StyleSheet, View, TextInput, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchJudicial} from '../helper/fetchApi';
import {fetchDismiss} from '../helper/fetchDismissApi';
import {fetchAcc} from '../helper/fetchDismissApi';
import {isLoding} from '../../store/modules/loding';
import {putDisMiss} from '../../store/modules/dismissModule';
import {putAcc} from '../../store/modules/accModule';
import disAccMixF from '../helper/disAccMixF';

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
    fontWeight: '200',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'black',
  },
});
//검색창 구현
function SearchFetchJudicial(props) {
  const dispatch = useDispatch();
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
    fetchJudicial(props.searchText)
      .then(async (data) => {
        props.setSearchKeyword(props.searchText);
        if (data.data.length < 1) {
          Alert.alert('검색 결과가 1건도 없습니다', '');
        }
        try {
          //디스미스를 구해야하며 검색결과도 보내줘야함
          const getDismissData = await fetchDismiss(props.searchText);
          const dismissCount = getDismissData.data;
          if (isArr(dismissCount)) {
            dispatch(putDisMiss(dismissCount));
          } else {
            dispatch(putDisMiss([]));
          }

          //accpet 결과도 가져와야 함
          const getAccData = await fetchAcc(props.searchText);
          const accCount = getAccData.data;
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
          function isArr(arr) {
            if (Array.isArray(arr)) return true;
            return false;
          }
        } catch (e) {
          console.log(e, 'dismiss failed');
          dispatch(isLoding(false));
        }
      })
      .catch((e) => {
        dispatch(isLoding(false));
        console.log(e, 'fetch first failed..');
        Alert.alert('fetch first error', '', {cancelable: false});
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
        }}
      />
    </View>
  );
}

export default SearchFetchJudicial;
