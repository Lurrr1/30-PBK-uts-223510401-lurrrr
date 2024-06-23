<template>
  <q-page class="container">
    <q-card class="posts" :class="{ raised: selectedUserId }">
      <q-card-section class="text-center">
        <div class="text-h4">Postingan</div>
      </q-card-section>
      <q-card-section>
        <q-select
          v-model="selectedUserId"
          :options="userOptions"
          label="Pilihlah"
          emit-value
          map-options
          outlined
          dense
          class="q-mb-md"
          @input="loadUserPosts"
          menu-anchor="bottom left"
          menu-self="top left"
        />
      </q-card-section>
      <q-card-section>
        <q-spinner v-if="loading" class="q-my-lg" color="primary" />
        <div v-else>
          <q-card
            v-for="(post, index) in userPosts"
            :key="post.id"
            class="q-mb-md"
          >
            <q-card-section>
              <div class="text-h6 q-mb-sm">
                {{ index + 1 }}. {{ post.title }}
              </div>
              <p>{{ post.body }}</p>
            </q-card-section>
          </q-card>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useQuasar } from "quasar";

const users = ref([]);
const selectedUserId = ref(null);
const userPosts = ref([]);
const loading = ref(false);
const $q = useQuasar();

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error("Error fetching users:", error);
    $q.notify({
      type: "negative",
      message: "Error fetching users",
    });
  }
};

const loadUserPosts = async () => {
  if (!selectedUserId.value) return;
  loading.value = true;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId.value}`
    );
    const data = await response.json();
    userPosts.value = data;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    $q.notify({
      type: "negative",
      message: "Error fetching user posts",
    });
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUsers);

watch(selectedUserId, () => {
  loadUserPosts();
});

const userOptions = computed(() => {
  return users.value.map((user) => ({ label: user.name, value: user.id }));
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 100vh;
}

.posts {
  width: 100%;
  max-width: 800px;
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.posts.raised {
  transform: translateY(-20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.text-center {
  text-align: center;
}

.q-mb-md {
  margin-bottom: 16px;
}

.q-my-lg {
  margin: 32px 0;
}

.text-h4 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.text-h6 {
  font-size: 18px;
  font-weight: bold;
  color: #555;
}

p {
  font-size: 16px;
  color: #777;
  line-height: 1.6;
}
</style>
