import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from './Accelerometer';
import ContactsExport from './ContactsExport';
import fn from './ContactsExport';
import Login from './Login.js';
import SendCard from './sendCard';
import Nav from './Nav';
import { ListItem, CheckBox, Modal, TouchableHighlight } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      bumpOccured: false,
      modalVisible: false
    };

    this.handleBump = this.handleBump.bind(this);
  }

  resetBump() {
    this.setState({ bumpOccured: false });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
    this.setState({ bumpOccured: true });
  }

  render() {
    const { bumpOccured } = this.state;

    if (bumpOccured) {
      return (
        <View style={styles.container}>
    <Modal
          style={styles.container}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => console.log('lala')}>
          <View style={styles.container}>
<Text style={styles.large}>Success! Select where you want to get connected below</Text>
      <View>
          <CheckBox checked={true} checkedColor='blue'/>
              <Text style={styles.large}>Personal Contact</Text>
      </View>
      <View>
          <CheckBox checked={false} checkedColor='red'/>
              <Text style={styles.large}>Spotify</Text>
      </View>
      <View>
          <CheckBox checked={false} color="green"/>
              <Text style={styles.large}>Instagram</Text>
      </View>
      <TouchableHighlight onPress={() => {
          this.setModalVisible(false);
          this.resetBump();
        }}>
          <Text style={styles.large}>Close me!</Text>
        </TouchableHighlight>
        </View>
   </Modal>


        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.large}>Open me!</Text>
        </TouchableHighlight>

      </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.large}>Waiting for bump!</Text>
          <Accelerometer onBump={this.handleBump} />
        </View>
      );
    }
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  large: {
    fontSize: 18,
  }
});
