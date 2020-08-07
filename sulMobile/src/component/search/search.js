import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, Text, Dimensions, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import fakeData from './fakeData';
import SearchList from './SearchList';
import SearchFetchJudicial from './searchFetchJudicial';
import Detail from './detail';
import {senTenCing} from '../../store/modules/sentencing';
// import {isLoding} from '../../store/modules/loding';
import LodingAnimation from '../helper/lodingAnimation';
import Analysis from './Analysis';
import AnalysisButton from './AnalysisButton';
import DisDetail from './dismissAccept/disDetail';
import AccDetail from './dismissAccept/accDetail';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  header: {
    flex: 1.2,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  headerSearch: {
    flex: 0.8,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#e4e4e4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  body: {
    flex: 6,
    // justifyContent: 'center',
    backgroundColor: 'white',
    // width: '100%',
  },
  title: {
    fontWeight: '200',
    fontSize: 30,
    color: 'black',
    marginVertical: 10,
  },
  titleBox: {
    flex: 1.1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
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
  },
  tab__title__box: {
    width: '25%',
    flex: 1,
    justifyContent: 'center',
  },
  tab__detail__title__box1: {
    flex: 1,
  },
  tab__detail__title__box2: {
    flex: 1,
  },
  tabtitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
  clickTabtitle: {
    textAlign: 'center',
    color: 'red',
    opacity: 0.5,
    fontSize: 20,
  },
  click: {
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    // backgroundColor: '#ffffff', // 배경색이 없으면 그림자가 안보일 수 있음.
    // //IOS
    // shadowColor: 'black',
    // //그림자색
    // shadowOpacity: 0.5, //그림자 투명도
    // shadowOffset: {width: 1, height: 1}, //그림자 위치
    // //ANDROID
    // elevation: 3,
  },
  main: {
    flex: 1,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingBottom: 20,
  },
  mainText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
});

function Search() {
  //redux data
  const dispatch = useDispatch();
  let sentencingData = useSelector((state) => state.sentencing.sentencing);
  let isLodingNow = useSelector((state) => state.loding.isLoding);
  useEffect(() => {
    dispatch(senTenCing({title: 'hi', day: '11', data: [], num: '0'}));
    console.log(sentencingData, '??????');
  }, []);

  //상태: 검색리스트 false, 디테일 true
  const [isDetail, setIsDetail] = useState(false);
  //서치 text 내용
  const [searchText, setSearchText] = useState(['']);
  //검색어 출력
  const [searchKeyword, setSearchKeyword] = useState('');
  //검색 결과
  const [clickedClassName, setClickedClassName] = useState([
    'click',
    'notClick',
    'notClick',
  ]);
  //검색결과 리스트
  const [lawData, setLawData] = useState([]);
  //분석하기 상태인가
  const [isAnalysis, setIsAnalysis] = useState(false);
  //기각 건수 토탈은 100을 기준으로 함
  const [dimiss, setDismiss] = useState(0);
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
  // const searchHandler = () => {
  //   if (searchText.length > 0) {
  //     setLawData(fakeData);
  //   } else {
  //     setLawData([]);
  //   }
  // };
  //SPA (Single Page Application)
  //하단 메인 페이지
  let mainScreen;
  if (lawData && lawData.length > 0) {
    if (isDetail && sentencingData.title !== 'hi') {
      // 판결 세부내용 페이지 //디테일이 트루일경우
      mainScreen = <Detail />;
    } else if (isAnalysis) {
      mainScreen = (
        <Analysis setIsAnalysis={setIsAnalysis} searchKeyword={searchKeyword} />
      );
    } else if (clickedClassName[0] == 'click') {
      //판결 리스트 페이지
      mainScreen = (
        <View style={{flex: 1}}>
          <View style={{flex: 6}}>
            <View
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  flex: 2,
                  fontSize: 20,
                  textAlign: 'left',
                  fontWeight: '700',
                  paddingHorizontal: 16,
                  overflow: 'hidden',
                  // paddingLeft: WIDTH / 10,
                }}>
                {searchKeyword}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 20,
                  color: 'rgba(0,0,0,0.5)',
                  textAlign: 'right',
                  paddingHorizontal: 16,
                }}>
                총 : {lawData.length}건
              </Text>
            </View>
            <SearchList laws={lawData} setIsDetail={setIsDetail} />
          </View>
          {/* {lawData.map(law =>(<SearchList law={law} etIsDetail={setIsDetail} />))} */}

          {/* <View style={styles.analysis__button}> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AnalysisButton
              setIsAnalysis={setIsAnalysis}
              setIsDetail={setIsDetail}
            />
          </View>
        </View>
      );
      //두번째 탭인 승인과 세번째 탭인 기각 보여주기
    } else if (clickedClassName[1] == 'click') {
      mainScreen = <AccDetail setIsDetail={setIsDetail} />;
    } else if (clickedClassName[2] == 'click') {
      mainScreen = <DisDetail setIsDetail={setIsDetail} />;
    }
  } else {
    mainScreen = (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.mainText}>키워드를 입력해 주세요</Text>
      </View>
    );
  }
  return (
    // <ScrollView contentContainerStyle={{flexGrow: 1}}>
    // <TouchableWithoutFeedback onPress={_onPressEmptySpace}>
    <View style={styles.all}>
      {isLodingNow ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LodingAnimation />
        </View>
      ) : (
        <>
          <View style={styles.titleBox}>
            <Text style={styles.title}>SUL team</Text>
          </View>
          <View style={styles.header}>
            <View style={styles.headerSearch}>
              <Ionicons
                name={'search-outline'}
                size={30}
                color={'rgba(0, 0,0,0.5)'}
              />
              <SearchFetchJudicial
                setSearchText={setSearchText}
                setLawData={setLawData}
                searchText={searchText}
                setIsDetail={setIsDetail}
                setIsAnalysis={setIsAnalysis}
                setSearchKeyword={setSearchKeyword}
                setClickedClassName={setClickedClassName}
              />
            </View>

            {/* <------메뉴바 보여주는 컴포넌트 리스트를 클릭하면 이동 */}
            {isDetail ? (
              // 높이 40 균등분배
              <View style={styles.tabbar}>
                <View style={[styles.tab__detail__title__box1]}>
                  <Ionicons
                    name="arrow-back-circle-outline"
                    size={22}
                    color="black"
                    onPress={() => setIsDetail(false)}
                    style={{paddingLeft: 10}}
                  />
                  {/* <Text onPress={() => setIsDetail(false)} style={styles.tabtitle}>
                뒤로
              </Text> */}
                </View>
                <View style={[styles.tab__detail__title__box2]}>
                  <Text style={styles.tabtitle}>판결 내용</Text>
                </View>
              </View>
            ) : isAnalysis ? (
              <></>
            ) : lawData.length > 0 ? (
              <View style={styles.tabbar}>
                <View
                  style={[styles.tab__title__box, styles[clickedClassName[0]]]}>
                  <Text onPress={() => selectOne(0)} style={styles.tabtitle}>
                    전체
                  </Text>
                </View>
                <View
                  style={[styles.tab__title__box, styles[clickedClassName[1]]]}>
                  <Text onPress={() => selectOne(1)} style={styles.tabtitle}>
                    승인
                  </Text>
                </View>
                <View
                  style={[styles.tab__title__box, styles[clickedClassName[2]]]}>
                  <Text onPress={() => selectOne(2)} style={styles.tabtitle}>
                    기각
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.tabbar}>
                <View>
                  <Text
                    onPress={() => selectOne(0)}
                    style={styles.clickTabtitle}></Text>
                </View>
                <View>
                  <Text
                    onPress={() => selectOne(1)}
                    style={styles.clickTabtitle}></Text>
                </View>
                <View>
                  <Text
                    onPress={() => selectOne(2)}
                    style={styles.clickTabtitle}></Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.body}>
            <View style={styles.main}>
              {/* <---- 데이터가 있으면 리스트를 보여붐 */}
              {mainScreen}
            </View>
          </View>
        </>
      )}
    </View>
    //   {/* </TouchableWithoutFeedback> */}
    // {/* </ScrollView> */}
  );
}

export default Search;
