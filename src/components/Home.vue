<template>
  <div class="text-center">
    <p class="text-primary py-3">Let's play the game</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.getScore }}</h2>
    <span class="text-primary pb-3">Max score: {{ gameStore.maxHeath }}</span>
    <br />
    <span
      class="text-success pb-3 h3"
      v-if="gameStore.getScore >= gameStore.maxHeath"
    >
      You Won!
    </span>
    <span class="text-danger pb-3 h3" v-else-if="gameStore.score < 0">
      Game Over!
    </span>
    <div
      class="row"
      v-if="gameStore.getScore < gameStore.maxHeath && gameStore.getScore >= 0"
    >
      <div class="col-5 offset-1">
        <button
          @click="Increment()"
          class="form-control btn p-4 mb-4 btn-success"
        >
          Increment
        </button>
      </div>
      <div class="col-5 offset-1">
        <button
          @click="Decrement()"
          class="form-control btn p-4 mb-4 btn-danger"
        >
          Decrement
        </button>
      </div>
      <div class="col-6 offset-3">
        <button @click="Random()" class="form-control btn p-4 mb-4 btn-warning">
          Random
        </button>
      </div>
    </div>
    <div v-else class="form-control btn p-4 mb-4 btn-warning">
      <button @click="gameStore.resetGame()">Reset Game</button>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from "@/store/gameStore";
const gameStore = useGameStore();

function Increment() {
  // gameStore.score += Math.floor(Math.random() * 30) + 1;
  // gameStore.score = gameStore.setNextAttack();
  gameStore.setNextAttack();
}

function Decrement() {
  // gameStore.score -= Math.floor(Math.random() * 10) + 1;
  // gameStore.score = gameStore.setNextDefense();
  gameStore.setNextDefense();
}

function Random() {
  Math.random() > 0.5 ? Increment() : Decrement();
}
</script>

<style></style>
