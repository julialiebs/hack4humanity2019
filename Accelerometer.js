import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo';
import SocketIOClient from 'socket.io-client';
import findBump from './FindBump';
import LocationInfo from './LocationInfo';

export default class AccelerometerSensor extends React.Component {
    constructor(props) {
        super(props);

        this.socket = SocketIOClient('http://138.68.42.201:80');

        this.state = {
            location: null,
            accelerometerData: {},
            hasMovedFast: false
        };

        this.handleLocationUpdate = this.handleLocationUpdate.bind(this);
    }

    handleLocationUpdate(location) {
        this.setState({ location });
    }

    componentDidMount() {
        const { onBump } = this.props;

        this._toggle();
        this.socket.on('bumped', onBump(data));
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _toggle = () => {
        if (this._subscription) {
            this._unsubscribe();
        } else {
            this._subscribe();
        }
    };

    _slow = () => {
        Accelerometer.setUpdateInterval(1000);
    };

    _fast = () => {
        Accelerometer.setUpdateInterval(
            10 //was 16
        );
    };

    _subscribe = () => {
        let { hasMovedFast } = this.state;

        this._subscription = Accelerometer.addListener(
            accelerometerData => {
                result = findBump(accelerometerData, hasMovedFast);
                if (result === 'bump') {
                    hasMovedFast = false;
                    console.log('BUMP DETECTED @', this.state.location);
                    this.socket.emit('bump', 'Big bumps');
                    this.socket.emit('location', this.state.location);
                } else {
                    hasMovedFast = result;
                }
                this.setState({ accelerometerData, hasMovedFast });
            }
        );

    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {
        let {
            x,
            y,
            z,
        } = this.state.accelerometerData;

        return (
            <View style={styles.sensor}>
                <Text>Accelerometer:</Text>
                <Text>
                    x: {round(x)} y: {round(y)} z: {round(z)}
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this._toggle} style={styles.button}>
                        <Text>Toggle</Text>
                    </TouchableOpacity>
                     <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
                        <Text>Slow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._fast} style={styles.button}>
                        <Text>Fast</Text>
                    </TouchableOpacity>
                </View>

                <LocationInfo onLocationUpdate={this.handleLocationUpdate} />
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
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 15,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
    },
    middleButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    sensor: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
});