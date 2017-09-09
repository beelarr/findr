import firebase from '../config/firebase';
import register from './register';
import home from './home';

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

    login = () => {
        var state = this;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function () {
            //Login successful
            state.props.navigator.push({ component: home });
        },  (error) => {
            // An error happened
            AlertIOS.alert(error.message)
        });
    };

    register = () => {
        this.props.navigator.push({ component: register });
    };


    render() {
        return ( //there cant be multiple views in the outermost node
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <Text>Findr</Text>
                <TextInput
                    style={{height:40}}
                    placeholder="Email"
                    onChangeText={(email) => this.setState({email: email})}
                    value={this.state.email}/>
                <TextInput
                    style={{height:40}}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password: password})}
                    value={this.state.password}/>
                <Button
                    onPress={this.login.bind(this)}  //this is the entire component, binds the text input to the submit function
                    title="Login"/>
                <TouchableOpacity onPress={this.register.bind(this)}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;