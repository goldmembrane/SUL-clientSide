import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {fetchKeyDel} from '../helper/fetchKeyWord';
const styles = StyleSheet.create({
  infoBox: {
    flex: 2,
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
  history__maintitle: {
    color: 'black',
    padding: 10,
    fontSize: 24,
  },
  // history__contentbox: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   paddingVertical: 7,
  // },
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

function History({index, his, navigation}) {
  function delKeyWord(keyword) {
    fetchKeyDel(keyword)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e, 'History Del error'));
  }
  //his 데이터를 받아서 뿌려
  return (
    <View style={styles.history__contentbox}>
      <View>
        {/* <View style={{paddingLeft: 20, width: '85%'}}> */}
        <Text
          style={styles.history__content__title}
          onPress={() => {
            navigation.navigate('Search', his.keyword);
          }}>
          {index || index == 0 ? index : ''} : {his.keyword || ''}
        </Text>
        {/* <Text onPress={() => delKeyWord(his.id)}>Del</Text> */}
        {/* <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 10}}>폭력으로 다리 피해</Text>
          <Text style={styles.history__content__day}>20.07.26</Text>
        </View> */}
      </View>
      {/* <View style={{paddingRight: 20}}>
        <Text style={styles.history__content__Percentage}>25%</Text>
      </View> */}
    </View>
  );
}

export default History;
{
  /* <View style={styles.history__contentbox}>
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
</View> */
}
