<template>
  <q-page class="q-pa-md">
    <q-spinner v-if="isLoading" size="lg" color="primary" />
    <div v-else class="photo-grid">
      <q-card
        v-for="photo in photos"
        :key="photo.id"
        class="photo-card cursor-pointer"
        :class="photo.sizeClass"
        flat
        bordered
        @click="selectPhoto(photo.id)"
      >
        <q-img
          :src="photo.thumbnailUrl"
          :alt="photo.title"
          class="photo-thumbnail"
        >
          <q-card-section>
            <div class="photo-title">{{ photo.title }}</div>
          </q-card-section>
        </q-img>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const photos = ref([]);
const isLoading = ref(false);

const getRandomSizeClass = () => {
  const sizeClasses = ["size-small", "size-medium", "size-large"];
  return sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
};

const fetchPhotos = async () => {
  try {
    isLoading.value = true;
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    ); // Directly fetch filtered data
    const data = await response.json();
    photos.value = data.map((photo) => ({
      id: photo.id,
      thumbnailUrl: photo.thumbnailUrl,
      url: photo.url,
      title: photo.title,
      sizeClass: getRandomSizeClass(),
    }));
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    isLoading.value = false;
  }
};

const selectPhoto = (id) => {
  router.push(`/photo/${id}`);
};

onMounted(() => {
  fetchPhotos();
});
</script>

<style scoped>
.q-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: auto;
  gap: 15px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

.photo-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.photo-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.photo-thumbnail {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}

.photo-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
}

.size-small {
  grid-column: span 1;
  grid-row: span 1;
}

.size-medium {
  grid-column: span 2;
  grid-row: span 2;
}

.size-large {
  grid-column: span 3;
  grid-row: span 3;
}

@media (max-width: 600px) {
  .photo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
