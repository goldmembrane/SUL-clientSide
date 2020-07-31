import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
// import fakeData from './fakeData';
import SearchList from './SearchList';
import SearchFetchJudicial from './searchFetchJudicial';

const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  header: {marginTop: 70, justifyContent: 'flex-end', backgroundColor: 'white'},
  body: {
    flex: 6,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    fontSize: 24,
    color: 'gray',
  },
  titleBox: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 5,
  },
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
  tabbar: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F4F4F4',
    marginVertical: 10,
  },
  tab__title__box: {
    width: '25%',
    flex: 1,
    paddingVertical: 10,
  },
  tabtitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  click: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    // background: '#ffffff', // 배경색이 없으면 그림자가 안보일 수 있음.
    //IOS
    shadowColor: 'black',
    //그림자색
    shadowOpacity: 0.5, //그림자 투명도
    shadowOffset: {width: 2, height: 3}, //그림자 위치
    //ANDROID
    elevation: 3,
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  mainText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
  analysis__button: {
    width: '70%',
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#82A3D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  analysis__button__text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
});

function Search() {
  const [searchText, setSearchText] = useState(['']);
  const [clickedClassName, setClickedClassName] = useState([
    'click',
    'notClick',
    'notClick',
  ]);
  const [lawData, setLawData] = useState([]);
  function selectOne(num) {
    if (num < 0 || num > 2) return;
    if (num === 0) {
      setClickedClassName(['click', 'notClick', 'notClick']);
    } else if (num === 1) {
      setClickedClassName(['notClick', 'click', 'notClick']);
    } else {
      setClickedClassName(['notClick', 'notClick', 'click']);
    }
  }
  _onPressEmptySpace = () => {
    Keyboard.dismiss();
  };
  // const searchHandler = () => {
  //   if (searchText.length > 0) {
  //     setLawData(fakeData);
  //   } else {
  //     setLawData([]);
  //   }
  // };
  return (
    <TouchableWithoutFeedback onPress={_onPressEmptySpace}>
      <View style={styles.all}>
        <View style={styles.header}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>SUL team</Text>
          </View>
          <SearchFetchJudicial
            setSearchText={setSearchText}
            setLawData={setLawData}
            searchText={searchText}
          />
          {/* <View style={styles.inputBox}>
            <TextInput
              style={styles.textInputBox}
              autoFocus={true}
              underlineColorAndroid="'rgba(0, 0,0,0.5)',"
              placeholder="검색하기"
              placeholderTextColor="'rgba(0, 0,0,0.5)',"
              selectionColor="#fff"
              autoCapitalize="none"
              onChangeText={(text) => {
                setSearchText(text);
              }}
              onSubmitEditing={() => {
                searchHandler();
                // console.log(lawData, 'lawdata');
              }}
            />
          </View> */}
          <View style={styles.tabbar}>
            <View style={[styles.tab__title__box, styles[clickedClassName[0]]]}>
              <Text onPress={() => selectOne(0)} style={styles.tabtitle}>
                전체
              </Text>
            </View>
            <View style={[styles.tab__title__box, styles[clickedClassName[1]]]}>
              <Text onPress={() => selectOne(1)} style={styles.tabtitle}>
                승인
              </Text>
            </View>
            <View style={[styles.tab__title__box, styles[clickedClassName[2]]]}>
              <Text onPress={() => selectOne(2)} style={styles.tabtitle}>
                기각
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.main}>
            {lawData?.length ? (
              <>
                <SearchList laws={lawData} />
                {/* <View style={styles.analysis__button}> */}
                <TouchableOpacity style={styles.analysis__button}>
                  <Text style={styles.analysis__button__text}>분석하기</Text>
                </TouchableOpacity>
                {/* </View> */}
              </>
            ) : (
              <Text style={styles.mainText}>키워드를 입력해 주세요</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Search;
