<script setup>
const name = "Header";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const pageTitle = ref("Home");
const router = useRouter();

const pages = [
  { title: "Home", path: "/" },
  { title: "Posts", path: "/posts" },
  // Add more pages as needed
];

const currentPageIndex = ref(0);

// const goToPreviousPage = () => {
//   if (currentPageIndex.value > 0) {
//     currentPageIndex.value--;
//     updateTitle();
//     router.push(pages[currentPageIndex.value].path);
//   }
// };

// const goToNextPage = () => {
//   if (currentPageIndex.value < pages.length - 1) {
//     currentPageIndex.value++;
//     updateTitle();
//     router.push(pages[currentPageIndex.value].path);
//   }
// };

const updateTitle = () => {
  pageTitle.value = pages[currentPageIndex.value].title;
};

// Update title on component mount
onMounted(() => {
  updateTitle();
});
</script>

<template>
  <header class="header">
    <h1>{{ pageTitle }}</h1>
    <div class="nav-buttons">
      <router-link to="/Post" class="nav-link-posts">Posts</router-link>
      <router-link to="/" class="nav-link-home">ToDoList</router-link>
    </div>
    <i class="fa-solid fa-bars nav-icon" id="icon-menu"></i>
  </header>
</template>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 9%;
  z-index: 100;
  background: #90e0ef /*var(--bg-color)*/;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  position: relative;
  top: 2vh;
}
.logo {
  font-size: 2.5rem;
  color: black;
  font-weight: 700;
  cursor: default;
}

.navbar a {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-left: 4rem;
  font-weight: 700;
}

.navbar a:hover,
.navbar a.active {
  color: var(--text-color);
}

#icon-menu {
  font-size: 3.6rem;
  color: var(--text-color);
  display: none;
}

.nav-buttons {
  display: flex;
}

.nav-link-posts,
.nav-link-home {
  position: relative;
  bottom: 2.9vh;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
}

.nav-link-posts {
  margin-right: 10px; /* Add margin to the right to separate buttons */
}
</style>
