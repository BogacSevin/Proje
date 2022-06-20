import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    token: null,
    isLogin : false
};
const getters = {
    _isAuthenticated: state => state.isLogin,
    getIsLogin: (state) => {
		return state.isLogin;
	}
};
const actions = {
    updateIsLogin: ({commit}, token)=> {
        commit ('setIsLogin', token);
    },
    logout: ({commit}) => {
        commit ('setLogout');
    }
};
const mutations = {	
    setIsLogin: (state, token) => {
        state.token = token
        state.isLogin = true;
    },
    setLogout: (state) => {
        state.token = null;
        state.isLogin = false;
    }
};

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});

export default store;