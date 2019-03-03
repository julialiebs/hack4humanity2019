import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from './Accelerometer.js';
import ContactsExport from './ContactsExport';
import fn from './ContactsExport';
import SendCard from './SendCard';

export default class App extends React.Component {
  componentDidMount() {
    fn();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Accelerometer></Accelerometer>
        <SendCard></SendCard>

      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
