import firebase from '../config/firebase';
import login from './login.js';
import home from './home.js'

import React, { Component } from 'react';   // importing from node_modules

import {
    View,
    Text,
    TextInput,
    Button,
    AlertIOS,
    TouchableOpacity
} from 'react-native';

class Login extends Component {
    constructor(props){ //passing down props from navigator
        super(props); // setting the properties
        this.state = { //defining the initial state of the props
            email: "",
            password: ""
        };
    }

    register = () => {
        var state = this;
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function () {
            //Register successful
            state.props.navigator.push({ component:home }); // If I used 'this' here it would be referring to Firebase. By capturing it before it refers to Register.
        },  (error) => {
            // An error happened
            AlertIOS.alert(error.message)
        });
    }

    login = () => {
        this.props.navigator.push({component: login});
    }

    render() {
        return ( //there cant be multiple views in the outermost node
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <Text>Findr</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Email"
                    onChangeText={(email) => this.setState({email: email})}
                    value={this.state.email}/>
                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password: password})}
                    value={this.state.password}/>
                <Button
                    onPress={this.register.bind(this)}  //this is the entire component, binds the text input to the register function
                    title="Register"/>
                <TouchableOpacity onPress={this.login.bind(this)}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;