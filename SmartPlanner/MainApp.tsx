import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreen from './Components/MainPage/MainScreen'
import LoginScreen from './Components/Login/LoginScreen'

interface IProps{
    userInfo:object
    signedIn:boolean
}
class MainApp extends Component<IProps,{}> {
    render() {
        //console.log(this.props)
        if(!this.props.signedIn){
            return(<LoginScreen/>)
        }else{
            return(<MainScreen/>)
        }
    }
}

const mapStateToProps:any = (state:any) => ({
        signedIn:state.screens.signedIn,
        userInfo:state.screens.userInfo
});

export default connect(mapStateToProps,{})(MainApp)
