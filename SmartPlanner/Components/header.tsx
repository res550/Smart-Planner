import React, {Component} from 'react';
import {View, Text} from 'react-native';


interface IState{
    myText:any,
    gestureName:any,
    backgroundColor:any,
}

interface IProps{

}

class header extends Component<IProps,IState>{
    constructor(props:any){
        super(props)
        this.state = {
            myText: 'I\'m ready to get swiped!',
            gestureName: 'none',
            backgroundColor: '#fff'
        };
    }

    public render(){
        return(
        <View>
            <Text>Hello This is a header</Text>
        </View>
        );
    }
}

export default header;