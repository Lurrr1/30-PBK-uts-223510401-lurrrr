<template>
  <main class="app q-pa-md">
    <section class="create-todo q-mb-md">
      <h3><b>Isi list tugas yang akan dilakukan!</b></h3>
      <form id="new-todo-form" @submit.prevent="handleSubmit">
        <q-input
          standout
          filled
          v-model="newTodo"
          bg-color="white"
          label="Masukkan Tugas"
          class="q-mb-sm"
        />
        <q-btn label="Tambahkan tugas" class="tugas" @click="handleSubmit" />
      </form>
    </section>

    <section class="todo-list">
      <h3><b>LIST TUGAS :</b></h3>
      <div
        v-for="todo in filteredTodos"
        :key="todo.id"
        :class="`todo-item ${todo.done && 'done'}`"
      >
        <label>
          <div class="todo-content q-py-sm">
            <q-checkbox
              v-model="todo.done"
              :disable="todo.editing"
              class="styled-checkbox"
            />
            <span :class="{ done: todo.done }" v-if="!todo.editing">
              {{ todo.text }}
            </span>
            <q-input
              standout
              filled
              v-model="todo.editedText"
              v-else
              @keyup.enter="saveEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
              :disable="!todo.editing"
              label="Edit Todo"
            />
          </div>
        </label>

        <div class="actions">
          <q-btn
            round
            icon="edit"
            color="primary"
            class="q-mr-sm"
            @click="startEdit(todo)"
            v-if="!todo.done"
          />
          <q-btn
            round
            icon="cancel"
            color="secondary"
            @click="cancelEdit(todo)"
            v-if="todo.editing"
          />
          <q-btn
            round
            icon="delete"
            color="negative"
            @click="removeTodo(todo)"
          />
        </div>
      </div>
      <div class="q-mt-md">
        <q-btn
          :label="
            hideCompleted.value ? 'Tampilkan Semua' : 'Sembunyikan yang Selesai'
          "
          text-color="black"
          color="white"
          @click="toggleHideCompleted"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTodoStore } from "../stores/todos";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { todos, hideCompleted, filteredTodos } = storeToRefs(todoStore);
const { addTodo, removeTodo, toggleHideCompleted } = todoStore;

const newTodo = ref("");

const handleSubmit = () => {
  if (newTodo.value.trim()) {
    addTodo(newTodo.value);
    newTodo.value = "";
  }
};

const updateTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos.value));
};

// Watch for changes in todos and update local storage
watch(
  todos,
  (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  },
  { deep: true }
);

function startEdit(todo) {
  todo.editing = true; // Toggle editing mode on click
  todo.editedText = todo.text; // Backup original text for editing
}

function saveEdit(todo) {
  if (todo.editedText.trim()) {
    // Only save if there's actual content
    todo.text = todo.editedText;
  }
  todo.editing = false; // Exit editing mode
}

function cancelEdit(todo) {
  todo.editing = false; // Exit editing mode without saving
  todo.editedText = todo.text; // Restore original text
}
</script>

<style scoped>
.q-mb-sm {
  color: white;
}

body h3 {
  color: white;
}

.done {
  text-decoration: line-through;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #eeeeee;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.todo-content {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
}

.actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 1rem;
}

.tugas {
  background-color: #eeeeee;
  color: black;
}

input[type="checkbox"].styled-checkbox {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  background-color: #fff;
  vertical-align: middle;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
}

input[type="checkbox"].styled-checkbox:checked:before {
  content: "\2713";
  font-size: 14px;
  color: #fff;
  background-color: black;
  text-align: center;
  line-height: 14px;
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid grey;
  border-radius: 3px;
}
</style>
