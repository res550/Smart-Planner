import { combineReducers } from 'redux';
import CalendarReducer from './CalendarReducer';
import LoginReducer from './LoginReducer'

export default combineReducers({
    screens: LoginReducer,
    calendarInfo: CalendarReducer
})