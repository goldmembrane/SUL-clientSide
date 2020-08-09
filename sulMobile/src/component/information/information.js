import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({});

export default function Information() {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.project__structure}>
        <Text>프로젝트 소개</Text>
      </View>
      <View style={styles.team__structure}>
        <View style={styles.team}>
          <Image
            style={styles.team__image}
            source={require('../../../assets/team/team1.jpg')}></Image>
          <Text>황병현</Text>
        </View>
        <View style={styles.team}>
          <Image
            style={styles.team__image}
            source={require('../../../assets/team/team2.jpg')}></Image>
          <Text>조규창</Text>
        </View>
        <View style={styles.team}>
          <Image
            style={styles.team__image}
            source={require('../../../assets/team/team2.jpg')}></Image>
          <Text>김준섭</Text>
        </View>
      </View>
    </ScrollView>
  );
}
