import Login from './app/ios/login'   //importing login.js file

import React, { Component } from 'react';

import {
  AppRegistry,
  NavigatorIOS, // navigation from iOS
} from 'react-native';

export default class Findr extends Component {
  render() {
    return (
      <NavigatorIOS
        navigationBarHidden={true}
        initialRoute={{title: "Login", component: Login}}
        style={{flex: 1}}/>  //Required so contents are rendered
    );
  }
}

AppRegistry.registerComponent('Findr', () => Findr);
