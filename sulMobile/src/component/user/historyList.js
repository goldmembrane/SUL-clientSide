import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import HistoryListBox from './historyListBox';

const styles = StyleSheet.create({
  history: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

function HistoryList({historyData, navigation}) {
  let historyScreen;
  if (historyData && historyData.length > 0) {
    historyScreen = (
      <ScrollView style={{flex: 1}}>
        {historyData.map((his, index) => (
          <HistoryListBox
            key={his.id}
            index={index}
            his={his}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    );
  } else {
    historyScreen = <View></View>;
  }
  return (
    <View style={{paddingVertical: 10, height: '100%'}}>{historyScreen}</View>
  );
}

export default HistoryList;
