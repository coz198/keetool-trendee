import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function blogReducer(state = initialState.trend, action) {
    switch (action.type) {
        case types.BEGIN_GET_DETAIL_TREND:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_DETAIL_TREND_SUCCESS:
            return {
                ...state,
                ...{
                    data: action.data,
                    isLoading: false,
                }
            };
        default:
            return state
    }
}