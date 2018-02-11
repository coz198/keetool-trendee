import homeReducer from '../modules/home/homeReducer';
import loginReducer from '../modules/login/loginReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home: homeReducer,
    login: loginReducer,
});
export default rootReducer;