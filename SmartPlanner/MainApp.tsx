import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreen from './Components/MainPage/MainScreen'
import LoginScreen from './Components/Login/LoginScreen'

interface IProps{
    loading:boolean
    signedIn:boolean
}
class MainApp extends Component<IProps,{}> {
    render() {
        console.log(this.props)
        var word = "true"
        if(!this.props.loading){
            return(<LoginScreen/>)
        }else{
        return (
            <MainScreen/>
        )
        }
    }
}

const mapStateToProps:any = (state:any) => ({
        signedIn:state.screens.signedIn,
        loading:state.screens.loading,
});

export default connect(mapStateToProps)(MainApp)
