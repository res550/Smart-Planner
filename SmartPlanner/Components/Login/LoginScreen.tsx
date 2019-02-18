import React, { Component } from 'react';
import { Dimensions ,View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux'
import { getCalendarInfo } from '../../redux/actions/CalendarActions'
import { loginSuccess } from '../../redux/actions/ScreenActions'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

interface IProps{
    loginSuccess: (userInfo:object)=>void ,
    getCalendarInfo: (accessToken:String , query:String)=>void,
}
class LoginScreen extends Component<IProps>{
    constructor(props:any) {
        super(props)
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/calendar'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: "163762265667-kd94rs066j66m1v4cia32bq9pqkmin3u.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
            //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
            //accountName: '', // [Android] specifies an account name on the device that should be used
            //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }


    signIn = async () => {
        try {
            await GoogleSignin.signOut();
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();  
            console.log(userInfo)
           //Store User information in redux pull up loading screen
            this.props.loginSuccess(userInfo)
            if(userInfo.accessToken === null){
                userInfo.accessToken=""
            }
            this.props.getCalendarInfo(userInfo.accessToken,"")
        }
        catch(err){
            console.log(err)
        }
    };

    public render() {
        return (
            <View style={{backgroundColor: '#50C878', flex: 1,height: Dimensions.get('window').height  }}>
                <View style={{flex: 1, alignItems: 'center',justifyContent: 'center' }}>
                <GoogleSigninButton
                    style={{width: 192, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this.signIn} 
                    />
                </View>
            </View>
        );
    }
}

export default connect(null, { loginSuccess , getCalendarInfo })(LoginScreen);