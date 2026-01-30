<template>
  <div class="text-center">
    <p class="text-primary py-3">Let's play the game</p>
    <h2 class="text-primary pb-3">Current Score: {{ score }}</h2>
    <span class="text-primary pb-3">Max score: {{ maxHeath }}</span>
    <br />
    
    <span class="text-success pb-3 h3" v-if="score >= maxHeath">
      You Won!
    </span>
    <span class="text-danger pb-3 h3" v-else-if="score < 0">
      Game Over!
    </span>
    
    <div class="row" v-if="score < maxHeath && score >= 0">
      <div class="col-5 offset-1">
        <button
          @click="increment()"
          class="form-control btn p-4 mb-4 btn-success"
        >
          Increment
        </button>
      </div>
      <div class="col-5 offset-1">
        <button
          @click="decrement()"
          class="form-control btn p-4 mb-4 btn-danger"
        >
          Decrement
        </button>
      </div>
      <div class="col-6 offset-3">
        <button @click="random()" class="form-control btn p-4 mb-4 btn-warning">
          Random
        </button>
      </div>
    </div>
    
    <div v-else class="col-6 offset-3">
      <button 
        @click="reset()" 
        class="form-control btn p-4 mb-4 btn-warning"
      >
        Reset Game
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// Getters
const score = computed(() => store.getters.getScore)
const maxHeath = computed(() => store.state.maxHeath)

// Actions
function increment() {
  store.dispatch('setNextAttack')
}

function decrement() {
  store.dispatch('setNextDefense')
}

function random() {
  Math.random() > 0.5 ? increment() : decrement()
}

function reset() {
  store.dispatch('resetGame')
}
</script>