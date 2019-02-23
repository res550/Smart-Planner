//Container for the main application will break into multiple containers further from here
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import Header from './Header/header'
import DrawerNavigator from './Header/DrawerNavigator'


interface IState {

}

interface IProps {
    calendarInfo: any
}

class MainScreen extends Component<IProps, {}>{

    public render() {
        console.log(this.props.calendarInfo)
        return (
            <View>
                <DrawerNavigator/>
                <Header/>
                <Text>Welcome to the Main P</Text>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    calendarInfo: state.calendarInfo.calendarInfo,
});

export default connect(mapStateToProps, {})(MainScreen)