<template>
  <div>
    <header>
      <div class="text-center pt-3 text-success h3">CountOpedia</div>
      <hr />
    </header>
    <div class="row">
      <div class="col-4 offset-1">
        <router-link
          to="/"
          class="form-control badge rounded-pill text-bg-warning p-4"
        >
          Home
        </router-link>
      </div>
      <div class="col-4 offset-1">
        <router-link
          to="/homevuex"
          class="form-control badge rounded-pill text-bg-warning p-4"
        >
          Home Vuex
        </router-link>
      </div>
      <div class="col-4 offset-1">
        <router-link
          to="/info"
          class="form-control badge rounded-pill text-bg-warning p-4"
        >
          Info
        </router-link>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style></style>
