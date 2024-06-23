// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Post from "../view/Post.vue";
import Todo from "../view/Todo.vue";
import AlbumDetail from "../view/AlbumDetail.vue";
import Album from "../view/Album.vue";
import Home from "../view/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "/Todo",
          component: Todo,
        },
        {
          path: "/Post",
          component: Post,
        },
        {
          path: "/Album",
          component: Album,
        },
        {
          path: "photo/:photoId",
          component: AlbumDetail,
        },
      ],
    },
  ],
});

export default router;
