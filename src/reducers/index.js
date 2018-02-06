import homeReducer from '../modules/home/homeReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home: homeReducer,
});
export default rootReducer;