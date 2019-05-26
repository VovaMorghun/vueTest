import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        inpVal: '',
        selectedMoney: '',
        result:''
    },
    mutations:{

        setChangeInpVal(state , payload){

            state.inpVal = payload

        },

        setSelMoney(state , payload){

            state.selectedMoney = payload

        },

        setRes(state, {deals} ){
            state.result= deals
        }


       
    },
    actions:{

        
        Exchange_Rates(context) {
                    axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then((response) => {
                        context.commit('setRes', {  deals: response.data.data } )
                    }
            

        )},
    } ,              
    getters:{

       getInpVal(state){
           return state.inpVal
       },

       getSelectedMoney(state){
           return state.selectedMoney
       },

       getRsult(state){
           return state.result
       }
    }

})