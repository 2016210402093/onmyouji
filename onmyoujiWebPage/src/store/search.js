import {UPDATE_INPUT_FENGMO, UPDATE_INPUT_XUANSHANG, UPDATE_IS_FENGMO, UPDATE_IS_QUERY, UPDATE_IS_LOADING} from './mutation-type'



const search = {
    namespaced:true,
    state: {
        isQuery: false,  //是否查询
        isFengMo: true,
        inputFengMo: '',
        inputXuanShang: '',
        isLoading: false, //是否显示加载中动画
    },

    //可以用作过滤器
    getters: {
        
    },

    mutations: {
        [UPDATE_INPUT_FENGMO](state, newInput) {
            state.inputFengMo = newInput;
        },
        [UPDATE_INPUT_XUANSHANG](state, newInput) {
            state.inputXuanShang = newInput;
        },
        [UPDATE_IS_QUERY](state, isQuery) {
            state.isQuery = isQuery;
        },
        [UPDATE_IS_LOADING](state, isLoading) {
            state.isLoading = isLoading;
        },
        [UPDATE_IS_FENGMO](state, isFengMo){
            state.isFengMo = isFengMo;
        }
    },

    actions: {

    }
}

export default search;