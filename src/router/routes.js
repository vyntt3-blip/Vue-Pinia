import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Info from "@/components/Info.vue";
import HomeVuex from "@/components/HomeVuex.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/homevuex",
    component: HomeVuex,
    name: "homevuex",
  },
  {
    path: "/info",
    component: Info,
    name: "info",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
