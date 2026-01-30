<template>
  <div class="text-center">
    <p class="text-primary py-3">Let's play the game</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.getScore }}</h2>
    <span class="text-primary pb-3">Max score: {{ gameStore.maxHeath }}</span>
    <br />
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <p v-if="show">Xin chào Vue</p>
    </Transition>
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

    <TransitionGroup name="list" tag="ul">
      <li v-for="item in listMenu" :key="item.id">
        {{ item.name }}
      </li>
    </TransitionGroup>
    <button @click="addItem">Add</button>
    <button @click="removeItem">Remove</button>
  </div>
</template>

<script setup>
import { useGameStore } from "@/store/gameStore";

import { ref } from "vue";
const show = ref(false);

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

const listMenu = ref([
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "d",
  },
]);

function addItem() {
  listMenu.value.push({
    id: Date.now(),
    name: "new",
  });
}

function removeItem() {
  listMenu.value.pop();
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* transition group */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* CỰC KỲ QUAN TRỌNG */
.list-move {
  transition: transform 0.3s ease;
}
</style>
