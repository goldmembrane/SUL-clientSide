import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
// import fakeDataProbability from './fakeDataSearch/fakeDataProbability';

const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  back__button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: 'black',
    fontSize: 24,
  },
  // title css
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title__mainText: {padding: 10, fontSize: 30, fontWeight: '100'},
  title__subText: {padding: 20, fontSize: 20, fontWeight: '100'},
  // circle css
  circle: {flex: 2, justifyContent: 'center', alignItems: 'center'},
  // statistics css
  statistics: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
  },
  statistics__table: {flex: 1, alignItems: 'center'},
  statistics__table__text: {fontSize: 20, fontWeight: '100'},
  statistics__table__num: {fontSize: 40, fontWeight: '100'},
});

function Analysis({setIsAnalysis, searchKeyword}) {
  let disMissData = useSelector((state) => state.dismissModule.dismiss);
  let accData = useSelector((state) => state.accModule.acc);

  const [dismissData, setDismissData] = useState({
    total: disMissData.length + accData.length,
    dismiss: disMissData.length,
  });
  const [tmpDismiss, setTmpDismiss] = useState(0);
  const [percentage, setPercentage] = useState(0.0);

  const counter = useRef(0);
  useEffect(() => {
    if (dismissData) {
      let per = ((dismissData.dismiss / dismissData.total) * 100).toFixed(1);
      let interTime = 0;
      let interDismiss = 0;
      if (interTime === 0) {
        interTime = 300 / parseInt(per); // 퍼센트가 클수록 작아져야함 자주 상승 최대 0.3초
        interDismiss = dismissData.dismiss / per; //20퍼센트면 => 20번 상승 => 27개/20 1.35
      }
      const timer = setTimeout(() => {
        if (percentage > per || per - percentage < 1) {
          clearInterval(timer);
          setPercentage(per);
          setTmpDismiss(dismissData.dismiss);
        } else {
          counter.current += 1;
          setPercentage(percentage + 1);
          setTmpDismiss(parseInt(counter.current * interDismiss));
        }
      }, interTime);
      return () => {
        clearInterval(timer);
      };
    }
  }, [percentage]);
  return (
    <View style={styles.all}>
      <View style={styles.back__button}>
        <Ionicons
          name="chevron-back-sharp"
          size={40}
          color="gray"
          onPress={() => setIsAnalysis(false)}
          style={{paddingLeft: 10}}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.title__mainText}>{searchKeyword}</Text>
        <Text style={styles.title__subText}>소송이 기각될 확률</Text>
      </View>

      <View style={styles.circle}>
        <ProgressCircle
          percent={Number(percentage)}
          radius={100}
          borderWidth={12}
          color="#f06b4e"
          shadowColor="#91DC96"
          bgColor="#fff">
          <Text style={{fontSize: 28, fontWeight: '200'}}>{percentage} %</Text>
        </ProgressCircle>
      </View>

      <View style={styles.statistics}>
        <View style={styles.statistics__table}>
          <Text style={styles.statistics__table__text}>총</Text>
          <Text style={styles.statistics__table__num}>{dismissData.total}</Text>
        </View>
        <View style={styles.statistics__table}>
          <Text style={styles.statistics__table__text}>기각</Text>
          <Text style={styles.statistics__table__num}>{tmpDismiss}</Text>
        </View>
      </View>
    </View>
  );
}

export default Analysis;
