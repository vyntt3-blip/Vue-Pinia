import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    score: 0,
    maxHeath: 100,
    maxAttack: 30,
    maxDefense: 10,
  }),
  getters: {
    getScore() {
      return this.score;
    },
    getWinningsGame() {
      return this.maxHeath;
    }
    // // voi actions in pinia doi get thanh set
    // setNextAttack() {
    //   let attack = Math.floor(Math.random() * this.maxAttack) + 1;
    //   console.log("attach: ", attack);
    //   return this.score + attack;
    // },
    // setNextDefense() {
    //   let defense = Math.floor(Math.random() * this.maxDefense);
    //   console.log("defense: ", defense);
    //   return this.score - defense;
    // },
  },
  actions: {
    // voi actions in pinia doi get thanh set
    setNextAttack() {
      let attack = Math.floor(Math.random() * this.maxAttack) + 1;
      console.log("attach: ", attack);
      // return this.score + attack;
      this.score += attack;
    },
    setNextDefense() {
      let defense = Math.floor(Math.random() * this.maxDefense);
      console.log("defense: ", defense);
      // return this.score - defense;
      this.score -= defense;
    },
    resetGame() {
      this.score = 0;
    },
  }
});
