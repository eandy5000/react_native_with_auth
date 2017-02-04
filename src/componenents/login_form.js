import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }
    
    render() {
        console.log(this.state.text);
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@company.com'
                        onChangeText={email => this.setState({ email })} 
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry='true'
                        label='Password'
                        placeholder='password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log in!
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
