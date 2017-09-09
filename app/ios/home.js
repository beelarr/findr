import firebase from '../config/firebase';
import Header from '../components/header';
import styles from '../theme/theme';

import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';

class Home extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Header title="Findr"/> /* passing title as a "props" down to Header.js. Home is the parent to Header*/
                <Text> Home </Text>
            </View>
        );
    }
}

export default Home;