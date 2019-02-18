import { GET_CALENDAR_INFO} from '../actions/types'

const intialState = {
    calendarInfo:Object
}

export default function (state = intialState, action:any) {
    switch (action.type) {
        case GET_CALENDAR_INFO:
            return {
                ...state,
                calendarInfo:action.payload
            };
        default:
            return state;
    }
}