import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/views/Home/Home.vue";
import Detail from "@/components/views/Detail/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/:name", component: Detail },
  ],
});

export default router;
