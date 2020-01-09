import axios from './http'

function queryFengMoByKeyWords(params) {
    return axios.post('/queryFengMo', params)
}

export default {
    queryFengMoByKeyWords
}