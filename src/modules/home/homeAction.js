import * as homeApi from './homeApi';
import * as types from '../../constants/actionTypes';

export function getListTrend(page) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_LIST_TREND
        });
        homeApi.listTrendApi(page)
            .then(function (res) {
                dispatch({
                    type: types.GET_LIST_TREND_SUCCESS,
                    data: res.data.topics
                });
            })
            .catch(function (error) {
                throw (error);
            });
    }
}

// export function searchTrend(page, text) {
//     return (dispatch) => {
//         dispatch({
//             type: types.BEGIN_SEARCH_BLOG
//         });
//         homeApi.searchBlogApi(page, text)
//             .then(function (res) {
//                 dispatch({
//                     type: types.SEARCH_BLOG_SUCCESS,
//                     topics: res.data.topics
//                 });
//             })
//             .catch(function (error) {
//                 throw (error);
//             });
//     }
// }

// export function refreshListBlog() {
//     return (dispatch) => {
//         dispatch({
//             type: types.BEGIN_REFRESH_LIST_TREND
//         });
//         homeApi.listTrendApi(1)
//             .then(function (res) {
//                 dispatch({
//                     type: types.REFRESH_LIST_TREND_SUCCESS,
//                     blogs: res.data.blogs,
//                 });
//                 console.log(res.data.blogs);
//             })
//             .catch(function (error) {
//                 dispatch({
//                     type: types.REFRESH_LIST_TREND_ERROR,
//                 });
//                 console.log("error")
//             })
//     }
// }

export function getMoreListTrend(page) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_MORE_LIST_TREND
        });
        homeApi.listTrendApi(page)
            .then(function (res) {
                dispatch({
                    type: types.GET_MORE_LIST_TREND_SUCCESS,
                    data: res.data.topics,
                });
                console.log(res.data.topics)
            })
            .catch(function (error) {
                throw (error);
            });
    }
}
