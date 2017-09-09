import firebase from '../config/firebase';
import Header from '../components/header';
import styles from '../theme/theme';
import post from './post';
import Dimensions from 'Dimensions';
const deviceWidth = Dimensions.get('window').width;
import React, { Component } from 'react';

import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: []
        }
    }

    componentDidMount = () => {  //react native instance of what to do when someone is on a page
        this.getFood()
    }

    getFood = () => {
        firebase.database().ref('food').on('value', (foodEntry) => {  //once allows the db to be on once when someone comes to the page - on keeps it current
            var items = [];
            foodEntry.forEach((child) => { //child = image and value in FB
                var item = child.val();
                items.push(item);
            });
            items = items.reverse(); //showing newest items
            this.setState({ food: items });
        });
    }

    left = () => {
        this.props.navigator.push({ component: post }); //pushing post component which takes us to the post view/page
    }

    render () {
        return (
            <View style={styles.container}>
                <Header title="Findr" left={this.left.bind(this)} leftText={'Post +'}/>
                <ScrollView>
                    {/*nested render object of our food so that the entries are injected. Notice only one outside view*/}
                    {Object.keys(this.state.food).map((key) => {
                        return (
                            <View>
                                <Image source={{uri: this.state.food[key].image}} style={{ width: deviceWidth, height: (deviceWidth*.5)}}/>
                                <Text style={styles.text}>{this.state.food[key].place}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
                <Text> Home </Text>
            </View>
        );
    }
}
// passing title as a "props" down to Header.js. Home is the parent to Header


export default Home;