import Vue from 'vue'
import Vuex from 'vuex'
import {FilterTypes} from './constants'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  todos: [
    {
      id: 0,
      text: 'First',
      completed: true
    },
    {
      id: 1,
      text: 'Second',
      completed: false
    },
    {
      id: 2,
      text: 'Third',
      completed: true
    }
  ],
  filter:FilterTypes.ALL
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {

  }
})
