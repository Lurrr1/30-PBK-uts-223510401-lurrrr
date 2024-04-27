<script setup>
import { ref, computed } from "vue";

let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<template>
  <main class="app">
    <section class="greeting">
      <!-- <hr />
      <hr /> -->
    </section>
    <section class="create-todo">
      <h3><b>Isi List Tugas Yang Akan Dilakukan!</b></h3>
      <form id="new-todo-form" @submit.prevent="addTodo">
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Cth : Tugas Pemrograman Berbasis Komponen Pertemuan 1"
          v-model="newTodo"
        />
        <button class="tugas">Tambahkan Tugas</button>
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
          <ul>
            <input
              type="checkbox"
              class="styled-checkbox"
              v-model="todo.done"
            />
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
          </ul>
        </label>

        <div class="todo-content">
          <input type="text" v-model="todo.content" />
        </div>

        <div class="actions">
          <button class="delete" @click="removeTodo(todo)">Hapus</button>
        </div>
      </div>
      <div>
        <button class="hide" @click="hideCompleted = !hideCompleted">
          {{ hideCompleted ? "Tampilkan Semua" : "Sembunyikan yang Selesai" }}
        </button>
      </div>
    </section>
  </main>
</template>

<style>
.done {
  text-decoration: line-through;
}
:root {
  --primary: #ea40a4;
  --business: #3a82ee;
  --personal: var(--primary);
  --light: #eee;
  --grey: #888;
  --dark: #313154;
  --danger: #ff5b57;

  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
  --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
}

input:not([type="radio"]):not([type="checkbox"]),
button {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: initial;
}

body {
  background: var(--light);
  color: var(--dark);
  background-color: #00b4d8;
  padding-left: 30px;
  background-image: url("bakgound.jpg");
}

section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5em;
}

h3 {
  color: var(black);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

h4 {
  color: var(--grey);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}

.tittle {
  animation: fadeIn 1s ease;
  text-shadow: 2px 2px 4px #000000;
  font-family: "Montserrat", sans-serif;
}
.greeting .title {
  display: flex;
  animation: fadeIn 1s ease;
}

.greeting .title input {
  margin-left: 0.5rem;
  flex: 1 1 0%;
  min-width: 0;
}

.greeting .title,
.greeting .title input {
  color: var(black);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.create-todo input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: var(--dark);
  background-color: #deb887;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
}

.create-todo .options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1.5rem;
}

.create-todo .options label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: #deb887;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
  display: none;
}

.create-todo input[type="submit"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: #fff;
  background-color: var(--primary);
  border-radius: 0.5rem;
  box-shadow: var(--personal-glow);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
  opacity: 0.75;
}

.todo-list .list {
  margin: 1rem 0;
}

.todo-list .todo-item {
  display: flex;
  align-items: center;
  background-color: #deb887;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1rem;
}

.todo-item .todo-content {
  flex: 1 1 0%;
}

.todo-item .todo-content input {
  color: var(--dark);
  font-size: 1.125rem;
}

.todo-item .actions {
  display: flex;
  align-items: center;
}

.todo-item .actions button {
  display: block;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.todo-item .actions button:hover {
  opacity: 0.75;
}

.todo-item .actions .edit {
  margin-right: 0.5rem;
  background-color: var(--primary);
}

.todo-item .actions .delete {
  background-color: var(--danger);
}

.todo-item.done .todo-content input {
  text-decoration: line-through;
  color: var(--grey);
}

button {
  background-color: #f2f2f2;
  border: none;
  color: #555;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}

.hide {
  background-color: grey;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}
.hide:hover {
  box-shadow: 0 8px 16px 0 rgba(16, 75, 16, 0.2); /*Efek shadow yang lebih kuat saat dihover*/
}

.tugas {
  background-color: grey;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}
.tugas:hover {
  box-shadow: 0 8px 16px 0 rgba(16, 75, 16, 0.2); /*Efek shadow yang lebih kuat saat dihover*/
}

input[type="checkbox"].styled-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  background-color: #fff;
  vertical-align: middle;
  position: relative;
  top: 3px;
  margin-right: 10px;
  cursor: pointer;
}

/* CSS untuk gambar centang */
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

/* CSS untuk menampilkan border saat checkbox di-hover */
input[type="checkbox"].styled-checkbox:hover {
  border-color: #007bff;
}
</style>
