import Vue from 'vue'   
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex);

// const storage = {
//     fetch(){
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//                 // Local Storage 특성 상, JSON.parse()를 이용해야 한다
//                 arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//             }
//         }
//     }
//     return arr;
//   } 
// };

export const store = new Vuex.Store({
    modules: {
        todoApp: todoApp
    }
    
});