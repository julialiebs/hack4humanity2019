import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from './Accelerometer.js';
import ContactsExport from './ContactsExport';
import fn from './ContactsExport';
import Login from './Login.js';

// const isLoggedIn = props.isLoggedIn;
export default class App extends React.Component {
  // componentDidMount() {
  //   fn();
  // }
  state = {
    isLoggedIn: false
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <View style={styles.container}>

        {isLoggedIn ? <Text>Go Bump!</Text> : <Login />}

        
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
