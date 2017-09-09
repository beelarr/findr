import firebase from '../config/firebase';
import Header from '../components/header';
import styles from '../theme/theme';
import Dimensions from 'Dimensions'; //Gets devices window dimensions
import uploadImage from '../config/uploadImage';
import ImagePicker from 'react-native-image-picker'; //allows access of camera
import RNFetchBlob from 'react-native-fetch-blob'; //work-around that enables firebase to accept photos
import ImageResizer from 'react-native-image-resizer'; //auto resizer that helps app performance and look consistancy ex. line 40
const deviceWidth = Dimensions.get('window').width;
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

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
            image: 'https://firebasestorage.googleapis.com/v0/b/findr-3ffd0.appspot.com/o/placeholder.png?alt=media&token=778cf414-8fc7-4288-bd50-1580366ab56a',
            place: ''
        };
    }

    photo = () => {
        var state = this
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob = Blob
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                const source = {uri: response.uri.replace('file://', ''), isStatic: true}; //file:// is unique to iOS, will be different for Andriod
                ImageResizer.createResizedImage(source.uri, 500, 500, 'JPEG', 60).then((resizedImageURI) => {
                    uploadImage(resizedImageURI)
                        .then(url => state.setState({image: url})) //once our image is in firebase we setState to display it
                        .catch((error) => {
                        console.log('error', error);
                        });
                });
            }
        });
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
                    <TouchableOpacity onPress={this.photo.bind(this)}>
                        <Image source={{uri: this.state.image}} style={{width: deviceWidth, height: (deviceWidth * .5)}}/>
                    </TouchableOpacity>
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