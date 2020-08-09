import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from 'react-native';
import SULteamTitle from '../header/SULteamTitle';
import {fetchUserInfoGet} from '../helper/fetchApi';
import PicProfile from './PicProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignOut from './SignOut';
import {putUserInfo} from '../helper/fetchApi';
import {fetchKeyGet} from '../helper/fetchKeyWord';
import {lawgo} from '../helper/fetchApi';
// import ParserLaw from './ParserLaw';
import useConfirmLogin from '../../hooks/useConfirmLogin';
import HistoryList from './historyList';
import RefreshButton from './refreshButton';
import LodingAnimation from '../helper/lodingAnimation';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  header: {
    marginTop: HEIGHT / 14,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  username: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
  infoBox: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  history: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  profilePicBox: {
    flex: 4,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: HEIGHT / 8,
    height: HEIGHT / 8,
    backgroundColor: 'green',
    borderRadius: HEIGHT / 16,
  },
  profileInfoBox: {
    flex: 6,
    height: '100%',
    justifyContent: 'center',
  },
  profileInfoBox__logout: {
    padding: 16,
    marginRight: WIDTH / 12,
    textAlign: 'right',
    fontSize: 16,
  },
  profileInfoBox__text: {
    padding: 16,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '200',
  },
  profileInfoBox__text__button: {
    // height: HEIGHT / 16,
    // borderRadius: HEIGHT / 40,
    padding: 16,
    textAlign: 'center',
    fontSize: 16,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  //수정완료 취소 박스
  profileInfoBox__okcanclebox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  history__maintitle: {
    color: 'black',
    padding: 10,
    fontSize: 24,
    fontWeight: '200',
  },
  history__contentbox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  history__content__title: {
    marginBottom: 5,
    fontSize: 18,
  },
  history__content__day: {
    color: 'gray',
  },
  //이름 수정할 때 인풋
  inputBox: {
    width: 100,
    // height: 50,
    backgroundColor: 'rgba(0, 0,0,0.3)',
    // borderRadius: 10,
    // paddingHorizontal: 16,
    fontSize: 16,
    // color: 'black',
  },
});

export default function UserInfo(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({id: '', username: '', email: ''});
  //수정전 임시 저장
  const [userPicUrl, setUserPicUrl] = useState('');
  const [userName, setUserName] = useState('');
  //유저 이름 수정상태인가
  const [isEdName, setIsEdName] = useState(false);
  //전체 유저 에디팅 상태인지
  const [isEdit, setIsEdit] = useState(false);
  //유저 검색 히스토리 배열
  const [historyData, setHistoryData] = useState([]);

  let isLodingNow = useSelector((state) => state.loding.isLoding);

  useEffect(() => {
    fetchUserInfoGet()
      .then((data) => {
        if (data.status === 200) {
          setIsLogin(true);
          setUserInfo(data.data);
          // console.log(userInfo, 'data');
          // Alert.alert(
          //   '로그인 하였습니다.',
          //   '',
          //   [{text: '확인', onPress: () => navigation.navigate('Home')}],
          //   {cancelable: false},
          // );
          //
          //History data get Start!!!
          fetchKeyGet().then((keyData) => {
            console.log(keyData.data, 'keyData!!');
            if (keyData.data.length > 0) {
              setHistoryData(keyData.data);
            }
          });
        } else {
          Alert.alert('입력정보가 올바르지 않습니다');
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 404) {
          Alert.alert('아이디나 비밀번호가 맞지 않습니다.');
        } else {
          Alert.alert('esle error');
          // Alert.alert(
          //   'error',
          //   '로그인에 문제가 있습니다',
          //   [{text: '확인', onPress: () => navigation.navigate('Home')}],
          //   {cancelable: false},
          // );
        }
      });
    // fetchKeqyWords()
    //   .then((data) => {
    //     console.log(data.data, 'fetchKeyWords');
    //   })
    //   .catch((e) => {
    //     console.log(e, 'fetchKeyWords');
    //   });
  }, []);
  console.log('historydata : ', historyData);
  function aa() {
    lawgo('ㅁㅁ')
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => {
        console.log(e, 'err');
      });
  }
  _onPressEmptySpace = () => {
    Keyboard.dismiss();
  };
  upDateUserPicUrl = (url) => {
    setUserPicUrl(url);
    console.log(userPicUrl, 'pic url');
  };
  function toPutUserInfo() {
    putUserInfo(userName)
      .then((data) => {
        if (data.data.message == 'Success') {
          Alert.alert('Success.');
          setUserInfo({...userInfo, username: userName});
        }
      })
      .catch((e) => {
        if (e.response.status === 401) {
          Alert.alert('need user session.');
        } else {
          Alert.alert('Update Errorr', '', {cancelable: false});
        }
      });
  }
  function cancleInfo() {
    setUserPicUrl('');
    setUserName('');
  }
  const onConfirmLogin = useConfirmLogin();
  function toLogin() {
    onConfirmLogin(false);
    props.navigation.navigate('signin');
  }
  return (
    <TouchableWithoutFeedback onPress={_onPressEmptySpace}>
      {isLodingNow ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LodingAnimation />
        </View>
      ) : (
        <View style={styles.all}>
          {isLogin ? (
            <View style={styles.all}>
              <View style={styles.header}>
                <SULteamTitle />
              </View>
              <View style={styles.username}>
                {isEdName ? (
                  <TexItnput
                    style={styles.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder="username"
                    placeholderTextColor="'rgba(255, 255,255,0.5)',"
                    autoCapitalize="none"
                    //"#ffffff"
                    defaultValue={userInfo.username}
                    selectionColor="black"
                    onChangeText={(text) => {
                      setUserName(text);
                    }}
                  />
                ) : (
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      fontWeight: '300',
                    }}>
                    {userInfo.username}
                  </Text>
                )}
              </View>
              <View style={styles.infoBox}>
                <View style={styles.profilePicBox}>
                  {/* <View style={styles.circle}></View>
                   */}
                  <PicProfile
                    isEdit={isEdit}
                    isEdit={isEdit}
                    upDateUserPicUrl={upDateUserPicUrl.bind(this)}
                  />
                  <View style={{flexDirection: 'row'}}>
                    {isEdit ? (
                      <Icon
                        name="pencil"
                        size={18}
                        color="black"
                        onPress={() => {
                          setIsEdName(true);
                        }}
                      />
                    ) : (
                      <></>
                    )}

                    {/* <Text style={{color: 'black'}}>{userInfo.username}님</Text> */}
                  </View>
                </View>
                <View style={styles.profileInfoBox}>
                  <SignOut {...props} />
                  {/* <Text style={styles.profileInfoBox__logout}>Logout</Text> */}
                  <Text style={styles.profileInfoBox__text}>
                    {userInfo.email}
                  </Text>
                  {isEdit ? (
                    <View style={styles.profileInfoBox__okcanclebox}>
                      <Text
                        style={styles.profileInfoBox__text__button}
                        onPress={() => {
                          setIsEdit(false);
                          setIsEdName(false);
                          toPutUserInfo();
                        }}>
                        수정완료
                      </Text>
                      <Text
                        style={styles.profileInfoBox__text__button}
                        onPress={() => {
                          setIsEdit(false);
                          setIsEdName(false);
                          cancleInfo();
                        }}>
                        취소
                      </Text>
                    </View>
                  ) : (
                    <Text
                      style={styles.profileInfoBox__text__button}
                      onPress={() => {
                        setIsEdit(true);
                        console.log('???');
                      }}>
                      정보수정
                    </Text>
                  )}
                </View>

                {/* </View> */}
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.headline}>──────────────────────── </Text>
                  <Text style={styles.history__maintitle}>History</Text>
                  <RefreshButton setHistoryData={setHistoryData} />
                  <Text style={styles.headline}> ────────────────────────</Text>
                </View>
              </View>
              <View style={styles.history}>
                <HistoryList historyData={historyData} />
              </View>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text onPress={toLogin}>로그인이 필요합니다!</Text>
            </View>
          )}
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}
