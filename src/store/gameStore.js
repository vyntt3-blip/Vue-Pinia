


// composition api with pinia
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  // State
  const score = ref(0);
  const maxHeath = ref(100);
  const maxAttack = ref(30);
  const maxDefense = ref(10);

  // Getters
  const getScore = computed(() => score.value);
  const getWinningsScore = computed(() => maxHeath.value);

  function setNextAttack() {
    const attack = Math.floor(Math.random() * maxAttack.value) + 1;
    console.log("attack: ", attack);
    score.value += attack;
  }

  function setNextDefense() {
    const defense = Math.floor(Math.random() * maxDefense.value) + 1;
    console.log("defense: ", defense);
    score.value -= defense;
  }

  function resetGame() {
    score.value = 0;
  }

  return {
    // State
    score,
    maxAttack,
    maxHeath,
    maxDefense,
    
    // Getters
    getScore,
    getWinningsScore,

    // Actions
    setNextAttack,
    setNextDefense,
    resetGame,
  };
});


// import { defineStore } from "pinia";
// import { ref, computed } from "vue";

// export const useGameStore = defineStore("gameStore", () => {
//   const score = ref(0);
//   const maxHeath = ref(100);
//   const maxAttack = ref(30);
//   const maxDefense = ref(10);

//   const getScore = computed(() => score.value);
//   const getWinningsScore = computed(() => maxHeath.value);

//   setNextAttack = () => {
//     let attack = Math.floor(Math.random() * maxAttack.value) + 1;
//     console.log("attach: ", attack);
//     // return this.score + attack;
//     score.value += attack;
//   };
//   setNextDefense = () => {
//     let defense = Math.floor(Math.random() * maxDefense.value);
//     console.log("defense: ", defense);
//     // return this.score - defense;
//     score.value -= defense;
//   };
//   resetGame = () => {
//     score.value = 0;
//   };

//   return {
//     //state
//     score,
//     maxAttack,
//     maxHeath,
//     maxDefense,
//     //getters
//     getScore,
//     getWinningsScore,

//     //actions
//     setNextAttack,
//     setNextDefense,
//     resetGame,
//   };
// });
