import firebase from '../config/firebase';

import React, { Component } from 'react';   // importing from node_modules

import {
    View,
    Text,
    TextInput,
    Button,
    AlertIOS
} from 'react-native';

class Login extends Component {
    constructor(props){ //passing down props from navigator
        super(props); // setting the properties
        this.state = { //defining the initial state of the props
            email: "",
            password: ""
        };
    }

    submit() {
        var state = this;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function () {
            //Login successful
            AlertIOS.alert("success")
        }, function (error) {
            // An error happened
            AlertIOS.alert(error.message)
        });
    }


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
                    onPress={this.submit.bind(this)}  //this is the entire component, binds the text input to the submit function
                    title="Login"/>
            </View>
        );
    }
}

export default Login;