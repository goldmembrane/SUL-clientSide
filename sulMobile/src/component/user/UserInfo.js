import React, {useState, useEffect} from 'react';

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

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  header: {
    marginTop: HEIGHT / 14,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  infoBox: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 20,

    borderWidth: 1,
    borderColor: 'black',
  },
  history: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',

    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
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
    fontSize: 16,
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

export default function UserInfo() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({id: '', username: '', email: ''});
  //수정전 임시 저장
  const [userPicUrl, setUserPicUrl] = useState('');
  const [userName, setUserName] = useState('');
  //유저 이름 수정상태인가
  const [isEdName, setIsEdName] = useState(false);
  //전체 유저 에디팅 상태인지
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    fetchUserInfoGet()
      .then((data) => {
        if (data.status === 200) {
          setIsLogin(true);
          setUserInfo(data.data);
          Alert.alert('로그인되었습니다');
          // console.log(userInfo, 'data');
          // Alert.alert(
          //   '로그인 하였습니다.',
          //   '',
          //   [{text: '확인', onPress: () => navigation.navigate('Home')}],
          //   {cancelable: false},
          // );
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
  }, []);

  _onPressEmptySpace = () => {
    Keyboard.dismiss();
  };
  upDateUserPicUrl = (url) => {
    setUserPicUrl(url);
    console.log(userPicUrl, 'pic url');
  };

  return (
    <TouchableWithoutFeedback onPress={_onPressEmptySpace}>
      {isLogin ? (
        <View style={styles.all}>
          <View style={styles.header}>
            <SULteamTitle />
            {/* <View style={styles.titleBox}>
            <Text style={styles.title}>SUL team</Text>
          </View> */}
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
                {isEdName ? (
                  <TextInput
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
                  <Text style={{color: 'black', fontSize: 16}}>
                    {userInfo.username}님
                  </Text>
                )}
                {/* <Text style={{color: 'black'}}>{userInfo.username}님</Text> */}
              </View>
            </View>
            <View style={styles.profileInfoBox}>
              <Text style={styles.profileInfoBox__logout}>Logout</Text>
              <Text style={styles.profileInfoBox__text}>{userInfo.email}</Text>
              {isEdit ? (
                <View style={styles.profileInfoBox__okcanclebox}>
                  <Text
                    style={styles.profileInfoBox__text__button}
                    onPress={() => {
                      setIsEdit(false);
                      setIsEdName(false);
                    }}>
                    수정완료
                  </Text>
                  <Text
                    style={styles.profileInfoBox__text__button}
                    onPress={() => {
                      setIsEdit(false);
                      setIsEdName(false);
                    }}>
                    취소
                  </Text>
                </View>
              ) : (
                <Text
                  style={styles.profileInfoBox__text}
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
          <View style={styles.history}>
            <View>
              <Text style={styles.history__maintitle}>History</Text>
            </View>
            <View style={styles.history__contentbox}>
              <View style={{paddingLeft: 20, width: '85%'}}>
                <Text style={styles.history__content__title}>
                  대법원 1980. 5. 20. 선고 80도306 전원합의체 판결 ★
                  [(가)내란목적살인,(나)내란수괴
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginRight: 10}}>폭력으로 다리 피해</Text>
                  <Text style={styles.history__content__day}>20.07.26</Text>
                </View>
              </View>
              <View style={{paddingRight: 20}}>
                <Text style={styles.history__content__Percentage}>25%</Text>
              </View>
            </View>
            <View style={styles.history__contentbox}>
              <View style={{paddingLeft: 20, width: '85%'}}>
                <Text style={styles.history__content__title}>
                  서울중앙지방법원 2016. 7. 4. 선고 2016고합12 판결
                  [특수공무집행방해치상ㆍ특수공무집행
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginRight: 10}}>폭력으로 다리 피해</Text>
                  <Text style={styles.history__content__day}>20.07.26</Text>
                </View>
              </View>
              <View style={{paddingRight: 20}}>
                <Text style={styles.history__content__Percentage}>25%</Text>
              </View>
            </View>
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
          <Text>로그인이 필요합니다!</Text>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}
