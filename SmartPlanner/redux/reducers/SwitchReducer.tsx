import { LOGIN, MAIN } from '../actions/types'

const intialState = {
    signedIn: false,
    loading: false
}

export default function (state = intialState, action: any) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                signedIn: false,
                loading: true
            };
        case MAIN:{
            return{
                ...state,
                signedIn:true,
                loading:false,
            }
        }
        default:
            return state;
    }
}