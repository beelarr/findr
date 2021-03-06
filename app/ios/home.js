import firebase from '../config/firebase';
import Header from '../components/header';
import styles from '../theme/theme';
import post from './post';
import map from './map';
import Dimensions from 'Dimensions';
const deviceWidth = Dimensions.get('window').width;
import React, { Component } from 'react';

import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
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

    map = () => {
        this.self.props.navigator.push({  //not really sure what this does
            component: map,
            passProps: {place: this.place.place }  //TODO: There is a bug here. If i replace the map doesn't error but it doesnt load. Check this file and map.js. #11
        });
    }

    render () {
        return (
            <View style={styles.container}>
                <Header title="Findr" left={this.left.bind(this)} leftText={'Post +'}/>
                <ScrollView>
                    {/*nested render object of our food so that the entries are injected. Notice only one outside view*/}
                    {Object.keys(this.state.food).map((key) => {
                        return (
                            <TouchableOpacity onPress={this.map.bind({self: this, place: this.state.food[key]})}>
                                <Image source={{uri: this.state.food[key].image}} style={{ width: deviceWidth, height: (deviceWidth*.5)}}/>
                                <Text style={styles.text}>{this.state.food[key].place.name}</Text>
                                <Text style={styles.text}>{this.state.food[key].place.address}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}


export default Home;