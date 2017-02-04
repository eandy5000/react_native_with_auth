import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './componenents/common';
import LoginForm from './componenents/login_form';


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
                <LoginForm />
            </View>
        );
    }

}

export default App;
