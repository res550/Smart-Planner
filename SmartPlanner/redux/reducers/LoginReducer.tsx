import { LOGIN, MAIN } from '../actions/types'

const intialState = {
    signedIn: false,
    userinfo:{}
}

export default function (state = intialState, action: any) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                signedIn: true,
                userinfo:action.payload
            };
        default:
            return state;
    }
}