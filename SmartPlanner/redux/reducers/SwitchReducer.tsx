import { LOGIN, MAIN } from '../actions/types'

const intialState = {
    loggedIn: false,
    loading: false
}

export default function (state = intialState, action: any) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: false,
                loading: true
            };
        case MAIN:{
            return{
                ...state,
                loggedIn:true,
                loading:false,
            }
        }
        default:
            return state;
    }
}