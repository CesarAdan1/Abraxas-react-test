import { combineReducers } from 'redux';
import alertaReducer from './alertaReducer';

export default combineReducers({
    alerta: alertaReducer,
})
