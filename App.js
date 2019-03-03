import React from 'react';
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



function collision(p1, p2) {
  if (math.pow(p1.location.coords.latitude - p2.location.coords.latitude, 2) +
    math.pow(p1.location.coords.longitude - p2.location.coords.longitude, 2) <= 0.0001) {
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
