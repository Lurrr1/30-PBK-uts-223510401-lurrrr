<template>
  <Header />
  <Footer />
  <div class="container">
    <div class="posts" id="post">
      <h1>Postingan User</h1>
      <h2>{{ selectedUserName }}</h2>
      <select v-model="selectedUser" class="selectModel" @change="fetchPosts">
        <option v-for="user in users" :value="user.id" :key="user.id">
          {{ user.name }}
        </option>
      </select>

      <div v-if="isLoading">
        <span class="loading-message">Loading posts...</span>
      </div>

      <ul v-if="!isLoading">
        <li v-for="(post, index) in posts" :key="post.id">
          <h3>
            <b>{{ index + 1 }}.{{ post.title }}</b>
          </h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const isLoading = ref(false);
const selectedUser = ref(null);
const selectedUserName = ref("");
const users = ref([]);
const posts = ref([]);

const fetchUser = async () => {
  try {
    isLoading.value = true;
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    isLoading.value = false;
  }
};

const fetchPosts = async () => {
  if (!selectedUser.value) return;
  isLoading.value = true;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`
    );
    const data = await response.json();
    posts.value = data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchUser();
});

watch(
  selectedUser,
  () => {
    posts.value = [];
    fetchPosts();
    const selectedUserObject = users.value.find(
      (user) => user.id === selectedUser.value
    );
    selectedUserName.value = selectedUserObject ? selectedUserObject.name : "";
  },
  { immediate: true }
);
</script>

<style scoped>
/* Global styles */
@media (prefers-color-scheme: dark) {
  .todo-app h2 ul li {
    color: #000000;
  }
}

/* Section styles */
section {
  min-height: 100vh;
  padding: 10rem 9% 2rem;
}

/* Navbar styles */

.navbar {
  display: flex;
  justify-content: right;
  align-items: right;
  width: 100%;
}

.navbar a {
  font-size: 1.4rem;
  color: white;
  margin: 0 2cap;
  font-weight: 700;
  text-decoration: none;
}

/* Container styles */
.container {
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  margin-top: -10px;
  margin-left: -10px;
  margin-bottom: -10px;
}

.posts {
  width: 100%;
  max-width: 900px;
  background-image: linear-gradient(
    to bottom,
    rgba(138, 125, 255, 0.61),
    rgb(0, 132, 255),
    rgba(0, 0, 255, 0)
  );
  margin: 50px auto 20px;
  padding: 40px 40px 70px;
  border-radius: 5px;
}

.posts h1 {
  color: rgb(0, 0, 0);
}

.posts h2 {
  color: rgb(0, 0, 0);
}

.loading-message {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
}

.selectModel {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  text-align: left;
  border: 1px solid #545454;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

.selectModel:focus {
  outline: none;
  border-color: #00aaff;
}

.posts ul {
  list-style-type: none;
  padding-left: 0;
}

.posts li {
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
}

.posts h3,
.posts p {
  text-align: left;
}

.posts p {
  padding: 0 0 0 25px;
  color: rgb(0, 0, 0);
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
}
</style>
