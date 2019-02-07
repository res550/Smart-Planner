import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { connect } from 'react-redux'
import { loginPressed } from '../../redux/actions/ScreenActions'

interface IProps{
    loginPressed: () =>void
}

class LoginScreen extends Component<IProps,{}>{

    public render(){
        return(
        <View>
            <Button
            title="Login"
            onPress= {()=>{ this.props.loginPressed() }}
            />
            <Text>Hello This is a header</Text>
        </View>
        );
    }
}

export default connect(null,{ loginPressed })(LoginScreen);