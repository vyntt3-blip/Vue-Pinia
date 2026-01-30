// vuex
import { createStore } from 'vuex'

export default createStore({
  state: {
    score: 0,
    maxHeath: 100,
    maxAttack: 30,
    maxDefense: 10
  },
  
  getters: {
    getScore: (state) => state.score,
    getWinningsScore: (state) => state.maxHeath
  },
  
  mutations: {
    SET_SCORE(state, value) {
      state.score = value
    },
    INCREMENT_SCORE(state, attack) {
      state.score += attack
    },
    DECREMENT_SCORE(state, defense) {
      state.score -= defense
    },
    RESET_GAME(state) {
      state.score = 0
    }
  },
  
  actions: {
    setNextAttack({ commit, state }) {
      const attack = Math.floor(Math.random() * state.maxAttack) + 1
      console.log('attack:', attack)
      commit('INCREMENT_SCORE', attack)
    },
    
    setNextDefense({ commit, state }) {
      const defense = Math.floor(Math.random() * state.maxDefense) + 1
      console.log('defense:', defense)
      commit('DECREMENT_SCORE', defense)
    },
    
    resetGame({ commit }) {
      commit('RESET_GAME')
    }
  }
})