import { combineReducers } from 'redux';
import SwitchReducer from './SwitchReducer'

export default combineReducers({
    screens: SwitchReducer
})