import * as env from '../../constants/env';
import axios from 'axios';

export function trendApi(id) {
    let url = env.API_URL + '/v2/topic/' + id;
    return axios.get(url);
}