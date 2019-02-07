//Container for the main application will break into multiple containers further from here
import React, {Component} from 'react';
import {View, Text} from 'react-native';


interface IState {

}

interface IProps {

}

class MainScreen extends Component<IProps,{}>{

    public render(){
        return(
            <View>
                <Text>Welcome to the Main Screen</Text>
            </View>
        )
    }
}

export default MainScreen;