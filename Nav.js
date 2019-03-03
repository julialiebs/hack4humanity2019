import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements'

export default class Nav extends React.Component {
    render() {
        return (
            <View>
                < Input
                    placeholder='BASIC INPUT'
                />

                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />

                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />

                <Input
                    placeholder='INPUT WITH SHAKING EFFECT'
                    shake={true}
                />

                <Input
                    placeholder='INPUT WITH ERROR MESSAGE'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                />
            </View>
        );
    }
}
