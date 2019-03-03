import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { Button } from 'react-native';


export default class SendCard extends React.Component {

    constructor(props) {
        super(props);
        this.onPress = '';
        this.socket = SocketIOClient('http://localhost:3000');
        this.socket.emit('bump', 'Hi server'); // emits 'hi server' to your server
    }

    clicked = () => {
        console.log('clicked')

        const dataObj = {
            action: 'click'
        };

        this.socket.emit('bump', dataObj);
    }

    render() {
        return (
            <View>

                <Button
                    onPress={this.clicked}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

            </View>
        );
    }
}