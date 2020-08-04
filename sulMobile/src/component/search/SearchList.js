import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {SearchListBox} from './SearchListBox';

const styles = StyleSheet.create({
  allBox: {
    flex: 1,
    // width: '100%',
    // height: '60%',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // alignContent: 'flex-start',
    // justifyContent: 'flex-start',
  },
  // box: {
  //   width: '40%',
  //   height: '100%',
  //   justifyContent: 'center',
  //   backgroundColor: 'gray',
  // },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

//한 줄에 두개 씩 박스를 만들어냄
//인풋으로 배열을 받아야함
const SearchList = ({setIsDetail, laws}) => {
  // console.log('por', props);
  return (
    <ScrollView style={styles.allBox}>
      {laws?.map(
        (law, index) => (
          <SearchListBox
            key={law.id || index}
            law={law}
            setIsDetail={setIsDetail}
          />
        ),

        // index < 14 ? (
        //   <SearchListBox
        //     key={law.id || index}
        //     law={law}
        //     setIsDetail={setIsDetail}
        //   />
        // ) : (
        //   <View key={index}></View>
        // ),
      )}
      {/* <SearchListBox setIsDetail={setIsDetail} /> */}
      {/* <View style={styles.box}></View> */}
    </ScrollView>
  );
};
export default SearchList;
