import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function homeReducer(state = initialState.home, action) {
    switch (action.type) {
        case types.BEGIN_GET_LIST_TREND:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_LIST_TREND_SUCCESS:
            return {
                ...state,
                ...{
                    data: action.data,
                    isLoading: false,
                }
            };
        // case types.BEGIN_SEARCH_BLOG:
        //     return {
        //         ...state,
        //         ...{
        //             isLoadingSearch: true,
        //         }
        //     };
        // case types.SEARCH_BLOG_SUCCESS:
        //     return {
        //         ...state,
        //         ...{
        //             blogs: action.blogs,
        //             isLoadingSearch: false,
        //         }
        //     };
        case types.BEGIN_GET_MORE_LIST_TREND:
            return {
                ...state,
                ...{
                    isLoadingMore: true,
                }
            };
        case types.GET_MORE_LIST_TREND_SUCCESS:
            return {
                ...state,
                ...{
                    data: [...state.data, ...action.data],
                    isLoadingMore: false,
                }
            };

        // case types.BEGIN_REFRESH_NEW_FEED :
        //     return {
        //         ...state,
        //         ...{
        //             isRefreshing : true
        //         }
        //     };
        // case types.REFRESH_NEW_FEED_SUCCESS: {
        //     let array1 = state.blogs;
        //     let array2 = action.blogs;
        //     let array3 = [];
        //     for (let i = 0; i < 6; i++) {
        //         if (array2[i].id !== array1[i].id) {
        //             array3.push(array2[i]);
        //         }
        //     }
        //     return {
        //         ...state,
        //         ...{
        //             isRefreshing: false,
        //             blogs: [...array3, ...state.blogs]
        //         }
        //     }
        // }
        // case types.CHANGE_VALUE_SEARCH_BLOG : {
        //     return {
        //         ...state,
        //         ...{
        //             blogs : action.blogs,
        //         }
        //     }
        // }
        // case types.REFRESH_NEW_FEED_ERROR:
        //     return {
        //         ...state,
        //         ...{
        //             isRefreshing : false
        //         }
        //     };
        default:
            return state
    }
}