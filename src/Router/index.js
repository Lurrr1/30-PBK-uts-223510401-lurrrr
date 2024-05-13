// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Post from "../view/Post.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Post",
      name: "Post",
      component: Post,
    },
  ],
});

export default router;
