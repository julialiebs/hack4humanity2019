import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	isLoggedIn: false,
		fullname: '',
		email: '',
   	};
    // this.state = {
    //   fullname: '',
    //   email: '',
    //   phone: '',
    //   organization: '',
    //   location: ''
    // };
  }
  
  onLogin() {
    // const { fullname, email, phone, organization, location } = this.state;
    // Alert.alert('Credentials', `${fullname} + ${email} + ${phone} + ${organization} + ${location}`);
    // const { fullname, email } = this.state;
    console.log("User logged in");
    this.setState({isLoggedIn: true});
    // Alert.alert('Credentials', `${fullname} + ${email} `);
  }

  doLogin(){
  	return (
      <View style={styles.container}>
        <TextInput
          value={this.state.fullname}
          onChangeText={(fullname) => this.setState({ fullname })}
          placeholder={'Full Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          style={styles.input}
        />        
        <Button
          title={'OK'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }

  render() {
  	const { isLoggedIn } = this.state;

  	if (isLoggedIn) {
  		return <Text>Go bump!</Text>;
  	} else {
  		return this.doLogin();
  	}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});