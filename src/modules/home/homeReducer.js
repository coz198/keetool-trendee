import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function homeAction(state = initialState.home, action) {
    switch (action.type) {
        case types.GET_DATA:
            return {
                ...state,
                ...{
                    data: action.data
                }
            };
        default:
            return state
    }
}