'use strict';

import React, {Component} from 'react';
import firebase from '../config/firebase';
import MapView from 'react-native-maps';
import ReactNative from 'react-native';
import Dimensions from 'Dimensions'; //Gets devices window dimensions
const styles = require('../theme/theme');
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    AlertIOS,
    Button
} from 'react-native';

class Map extends Component {
    onBack = () => {
        this.props.navigator.pop();
    }

    render() { //MapView tells map where to focus, MapView.Marker is for the pin.
        return (
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    region={{
                    latitude: this.props.place.lat,
                    longitude: this.props.place.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}>
                    <MapView.Marker
                        coordinate={{
                            latitude: this.props.place.lat,
                            longitude: this.props.place.lng
                        }}
                        title={this.props.place.name}
                        description={this.props.place.address}
                        />
                </MapView>
                <TouchableOpacity style={styles.btn} onPress={this.onBack.bind(this)}>
                    <Text style={styles.text}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Map;