import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from './Accelerometer';
import ContactsExport from './ContactsExport';
import fn from './ContactsExport';
import SendCard from './SendCard';
import Nav from './Nav'

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

        {/* <Nav></Nav> */}

      </View>
    );
  }
}

function collision(p1, p2) {
  if (((math.abs(p1.location.coords.latitude - p2.location.coords.latitude)) <= .0000000000001)
    && (math.abs(p1.location.coords.longitude - p2.location.coords.longitude)) <= .0000000000001) {
    if (p1.accelerationSuddenChange == 1 && p2.accelerationSuddenChange == 1) return true;
  }
  return false;
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
