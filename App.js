import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from './Accelerometer';
import ContactsExport from './ContactsExport';
import fn from './ContactsExport';
import Login from './Login.js';
import SendCard from './sendCard';
import Nav from './Nav'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.handleBump = this.handleBump.bind(this);
  }

  componentDidMount() {
    // const params = {
    //   response_type: 'code',
    //   client_id: 'bcd4b5f9529740eea81589bdf258c9a8',
    //   scope: 'user-top-read user-follow-modify',
    //   redirect_uri: 'bumpapp://auth'
    // };

    // axios.get('https://accounts.spotify.com/authorize', { params })
    //   .then(res => {
    //     console.log(res.json);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

  }

  handleBump(data) {
    console.log('Bump occurred!');
    //lat long //timespan
    console.log("Here's the stats:" + data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Accelerometer onBump={this.handleBump}></Accelerometer>
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
