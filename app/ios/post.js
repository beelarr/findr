import firebase from '../config/firebase';
import Header from '../components/header';
import styles from '../theme/theme';

var Dimensions = require('Dimensions'); //Gets devices window dimensions
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'https://static01.nyt.com/images/2014/05/12/multimedia/recipelab-steak/recipelab-steak-videoSixteenByNineJumbo1600-v2.jpg',
            place: ''
        };
    }

    post = () => {
        firebase.database().ref('food').push({image: this.state.image, place: this.state.place});
        this.props.navigator.pop();
}

    back = () => {
        this.props.navigator.pop();
    }

    render () {
        return (
            <View>
                <Header title="Post" left={this.back.bind(this)} leftText={'Back'}/>
                <View style={styles.center}>
                    <Image source={{uri: this.state.image}} style={{width: deviceWidth, height: (deviceWidth * .5)}}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Place"
                        onChangeText={(place) => this.setState({place: place})}
                        value={this.state.place}/>
                    <View style={styles.line}/>
                    <TouchableOpacity style={styles.btn} onPress={this.post.bind(this)}>
                        <Text style={styles.text}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Post;