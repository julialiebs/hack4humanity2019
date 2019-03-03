import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from './Accelerometer';
import ContactsExport from './ContactsExport';
import fn from './ContactsExport';
import Login from './Login.js';
import SendCard from './sendCard';
import Nav from './Nav';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      bumpOccured: false,
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
    this.setState({ bumpOccured: true });
  }

  render() {
    const { bumpOccured } = this.state;

    if (bumpOccured) {
      return (
        <View style={{marginTop: 22}}>
    <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
<h1 id="connectModal">Success! Select where you want to get connected below</h1>
      <ListItem>
          <CheckBox checked={true} />
            <Body>
              <Text>Personal Contact</Text>
            </Body>
      </ListItem>
      <ListItem>
          <CheckBox checked={false} />
            <Body>
              <Text>Spotify</Text>
            </Body>
      </ListItem>
      <ListItem>
          <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Instagram</Text>
            </Body>
      </ListItem>
   </Modal>


        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
        </TouchableHighlight>

        <TouchableHighlight onDismiss={() => {
          this.setModalVisible(false);
          alert('Information has been sent');
        }}>
        </TouchableHighlight>

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
