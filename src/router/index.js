import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main
  }
];

const ROUTER = createRouter({
  history: createWebHistory(),
  routes,
});

export default ROUTER;