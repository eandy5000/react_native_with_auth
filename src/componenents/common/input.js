import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder} 
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                // style={{ height: 20, width: 100 }}
            />
        </View>
    );
};

const styles = {
    viewStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 20
    },
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
};

export { Input };
