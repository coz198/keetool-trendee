import * as env from '../../constants/env';
import axios from 'axios';

export function listTrendApi(page) {
    let url = env.API_URL + '/v2/topic?page=' + page;
    return axios.get(url);
}
