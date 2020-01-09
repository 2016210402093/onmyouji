import axios from './http'

function queryXuanShangByKeyWords(params) {
    return axios.post('/queryXuanShang', params)
}

export default {
    queryXuanShangByKeyWords
}