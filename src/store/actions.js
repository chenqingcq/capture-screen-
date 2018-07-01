import * as types from './mutations-type';

export const setUsername = function({commit},name){
    commit(types.SET_USERNAME,name)
}
export const setPassword=function ({commit},val){
    state.commit(types.SET_PASSWORD,val)
}
