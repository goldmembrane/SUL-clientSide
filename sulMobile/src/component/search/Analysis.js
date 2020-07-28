import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import fakeDataProbability from './fakeDataProbability';

const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  header: {marginTop: 70, justifyContent: 'flex-end', backgroundColor: 'white'},
  body: {
    flex: 6,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  mid__title: {
    flex: 5,
  },
  main: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
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
  tabbar: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#F4F4F4',
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

  mainText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
  mid__title: {
    flex: 1,
  },
  mid__title__blank: {
    flex: 1,
  },
  small__title__box: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'black',
    fontSize: 24,
  },

  small__title__box__back: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
  small__title__box__title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
  mid__title__box: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid__graph: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const left = '<';

function Analysis() {
  const [dismissData, setDismissData] = useState(fakeDataProbability);
  const [percentage, setPercentage] = useState(0.0);
  useEffect(() => {
    if (dismissData) {
      let per = ((dismissData.dismiss / dismissData.total) * 100).toFixed(1);
      setPercentage(per);
    }
  }, []);
  return (
    <View style={styles.all}>
      <View style={styles.header}>
        {/* marginTop:70 */}
        <View style={styles.titleBox}>
          <Text style={styles.title}>SUL team</Text>
        </View>
        <View style={styles.tabbar}></View>
        <View style={styles.small__title__box}>
          <Text style={styles.small__title__box__back}>{left}</Text>
          <Text style={styles.small__title__box__title}>
            소송이 기각될 확율은?
          </Text>
          <Text style={styles.small__title__box__back}></Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.mid__title__blank}></View>
        <View style={styles.mid__title}>
          <View style={styles.mid__title__box}>
            <Text style={styles.small__title__box__title}>
              기각 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 총 &nbsp;&nbsp;
            </Text>
            <Text style={styles.small__title__box__title}>
              {dismissData.dismiss} &nbsp; / &nbsp; {dismissData.total}
            </Text>
          </View>
        </View>
        <View style={styles.mid__title__blank}></View>
        <View style={styles.mid__graph}>
          <ProgressCircle
            percent={percentage}
            radius={100}
            borderWidth={100}
            // color="#3399FF"
            // shadowColor="#999"
            color="red"
            shadowColor="blue"
            bgColor="#fff">
            <Text style={{fontSize: 18}}>{'30%'}</Text>
          </ProgressCircle>
        </View>
        <View style={styles.main}>
          <Text style={styles.mainText}>{String(percentage)}%</Text>
        </View>
      </View>
    </View>
  );
}

export default Analysis;
