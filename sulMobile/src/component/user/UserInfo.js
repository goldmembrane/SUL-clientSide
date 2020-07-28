import React from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import SULteamTitle from '../header/SULteamTitle';

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
  history__maintitle: {
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
});

export default function UserInfo() {
  _onPressEmptySpace = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={_onPressEmptySpace}>
      <View style={styles.all}>
        <View style={styles.header}>
          <SULteamTitle />
          {/* <View style={styles.titleBox}>
            <Text style={styles.title}>SUL team</Text>
          </View> */}
        </View>
        <View style={styles.infoBox}>
          <View style={styles.profilePicBox}>
            <View style={styles.circle}></View>
            <Text style={styles.title}>id</Text>
          </View>
          <View style={styles.profileInfoBox}>
            <Text style={styles.profileInfoBox__logout}>Logout</Text>
            <Text style={styles.profileInfoBox__text}>Email</Text>
            <Text style={styles.profileInfoBox__text}>정보수정</Text>
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
    </TouchableWithoutFeedback>
  );
}
