<template>
  <div>
    <h1 class="text-center">Info</h1>
    <p class="text-center">This is the info page</p>
    <p>
      This is a simple game where you can increment, decrement, or randomize the
      score. the score start at 50 and you can win by reaching
      {{ gameStore.getWinningsGame }}. if you reach
      {{ gameStore.getWinningsGame }}
    </p>
    <input type="text" v-model.lazy="gameStore.maxHeath" />
  </div>
</template>
<script setup>
import { useGameStore } from "@/store/gameStore";
const gameStore = useGameStore();
</script>
