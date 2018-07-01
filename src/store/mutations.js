import * as types from './mutations-type';
import state from './state';
const mutations = {
    [types.SET_USERNAME](state,username){
        console.log(username);
        state.username = username
    }
}
export default mutations
