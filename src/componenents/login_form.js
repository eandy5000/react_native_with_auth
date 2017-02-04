import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        text: ''
    }
    
    render() {
        console.log(this.state.text);
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email:'
                        placeholder='user@company.com'
                        onChangeText={text => this.setState({ text })} 
                        value={this.state.text}
                    />
                </CardSection>

                <CardSection />
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
