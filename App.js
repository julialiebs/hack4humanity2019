import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from './Accelerometer.js';
import ContactsExport from './ContactsExport';
import fn from './ContactsExport';
import ContactsList from './ContactsList';

export default class App extends React.Component {
  componentDidMount() {
    fn();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Accelerometer></Accelerometer>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
