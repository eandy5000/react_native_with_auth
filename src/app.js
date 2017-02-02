import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './componenents/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB9gK_NlapCl0hcH-av0m2AXjB16SduMFU',
            authDomain: 'auth-ed149.firebaseapp.com',
            databaseURL: 'https://auth-ed149.firebaseio.com',
            storageBucket: 'auth-ed149.appspot.com',
            messagingSenderId: '831943687094'
         });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>App works</Text>
            </View>
        );
    }

}

export default App;
