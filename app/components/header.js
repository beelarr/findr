import styles from '../theme/theme';

import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

class Header extends Component {  //Header is in components dir because its reusable and no state is inv
    render() {
        return (
        <View>
            <View style={styles.header}>
                <Text>{this.props.title}</Text>
            </View>
            <View style={styles.line}/>
        </View>
        );
    }
}

module.exports = Header;