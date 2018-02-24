import * as trendApi from './trendApi';
import * as types from '../../constants/actionTypes';

export function getDetailTrend(id) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_DETAIL_TREND
        });
       trendApi.trendApi(id)
            .then(function (res) {
                dispatch({
                    type: types.GET_DETAIL_TREND_SUCCESS,
                    data: res.data.data.topic
                });
                console.log(res.data.data)
            })
            .catch(function (error) {
               throw (error);
            });
    }
}
