import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native' 

class MainApp extends Component {


    render() {
        var word = "true"
        if(!this.props.loggedIn){
            word = "false"
        }
        return (
            <View>
                <Text>Current state is {word}</Text>
            </View>
        )
    }
}

const maptoprop:any = (state:any) => ({
        loggedIn:state.screens.loggedIn,
        loading:state.screens.loading,
});

export default connect(maptoprop)(MainApp)
