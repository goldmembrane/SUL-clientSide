import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Linking,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white', paddingTop: 51},
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
  project__structure: {flex: 1},
  team__structure: {flex: 1},
  team: {flex: 1, flexDirection: 'row', margin: 10},
  team__image: {width: 150, height: 200},
  team__name: {padding: 10, fontSize: 30, fontWeight: '100'},
  team__github: {padding: 10, fontSize: 30, fontWeight: '100'},
});

export default function Information() {
  return (
    <ScrollView style={styles.all}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>SUL team</Text>
      </View>
      <View style={styles.project__structure}>
        <Text
          style={{
            margin: 15,
            fontWeight: '200',
            fontSize: 15,
          }}>{`세상을 살아가다 보면 다양한 상황과 문제에 부딪치게 되고, 그 문제를 해결하기 위해 여러가지 방법을 사용합니다.

그 방법 중 하나로 소송을 제기해 문제를 해결하려고 하지만, 판단할 이유가 없다는 소위 '기각' 판정을 받으면, 결과적으로 소송을 준비하기 위한 시간과 재화를 낭비하게 되는 것입니다.

저희 팀 AAA가 만든 SUL(Support Your Lawsuit)은 키워드를 통해 판례를 검색한 다음, 전체 판례 중에 얼마나 기각됬는지 분석하는 앱입니다.

자신의 상황을 키워드로 입력하여 검색하면, 이 전의 비슷한 상황에서 얼마나 기각됬는지 비율을 계산해서 보여주는 서비스입니다.`}</Text>
      </View>
      <View style={styles.team__structure}>
        <View style={styles.team}>
          <Image
            style={styles.team__image}
            source={require('../../../assets/team/team1.jpg')}></Image>
          <View>
            <Text style={styles.team__name}>황병현</Text>

            <Ionicons
              style={styles.team__github}
              onPress={() => Linking.openURL('https://github.com/goldmembrane')}
              name={'logo-github'}
              size={30}
            />
          </View>
        </View>
        <View style={styles.team}>
          <Image
            style={styles.team__image}
            source={require('../../../assets/team/team2.jpg')}></Image>
          <View>
            <Text style={styles.team__name}>조규창</Text>
            <Ionicons
              style={styles.team__github}
              onPress={() => Linking.openURL('https://github.com/codingc1')}
              name={'logo-github'}
              size={30}
            />
          </View>
        </View>
        <View style={styles.team}>
          <Image
            style={styles.team__image}
            source={require('../../../assets/team/team3.jpg')}></Image>
          <View>
            <Text style={styles.team__name}>김준섭</Text>
            <Ionicons
              style={styles.team__github}
              onPress={() => Linking.openURL('https://github.com/JunSeobKim')}
              name={'logo-github'}
              size={30}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
