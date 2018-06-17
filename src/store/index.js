import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'北京'
    },
    actions:{
        changeCity(ctx,name){
            //ctx
            ctx.commit('changeCityMu',name);
        }
    },
    mutations:{
        changeCityMu(state,cityName){
            state.city = cityName;
        }
    }
})