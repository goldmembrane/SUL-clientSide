import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SearchListBox} from './SearchListBox';

const styles = StyleSheet.create({
  allBox: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

//한 줄에 두개 씩 박스를 만들어냄
//인풋으로 배열을 받아야함
const SearchList = ({setIsDetail, laws}) => {
  console.log('por :::::::::::::::: ', laws);
  return (
    <ScrollView style={styles.allBox}>
      {laws?.map((law, index) => (
        <SearchListBox
          key={index}
          law={law}
          setIsDetail={setIsDetail}
          index={index}
        />
      ))}
    </ScrollView>
  );
};
export default SearchList;
