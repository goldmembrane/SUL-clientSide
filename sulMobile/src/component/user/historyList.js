import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import HistoryListBox from './historyListBox';

const styles = StyleSheet.create({
  history: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: 'white',
    // width: '100%',

    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

function HistoryList({historyData}) {
  let historyScreen;
  if (historyData && historyData.length > 0) {
    historyScreen = (
      <ScrollView style={styles.history}>
        {historyData.map((his, index) => (
          <HistoryListBox key={his.id || index} his={his} />
        ))}
      </ScrollView>
    );
  } else {
    historyScreen = <View></View>;
  }
  return <View>{historyScreen}</View>;
}

export default HistoryList;
