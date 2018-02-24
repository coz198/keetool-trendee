import homeReducer from '../modules/home/homeReducer';
import trendReducer from '../modules/trend/trendReducer';
import loginReducer from '../modules/login/loginReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home: homeReducer,
    login: loginReducer,
    trend: trendReducer,
});
export default rootReducer;