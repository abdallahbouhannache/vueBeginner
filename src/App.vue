<template>
  <div id="app">
    <Header />
    <Todos v-bind:todos="todos" v-on:del-todo="deletetodo" />
    <AddNewTodo v-on:addNewTD="add_NewTD" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Header from "./components/Header.vue";
import AddNewTodo from "./components/AddNewTodo.vue";

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddNewTodo
  },
  methods: {
    deletetodo(id) {
      console.log(id);
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    add_NewTD(val) {
      this.todos.push({
        id: this.todos.length + 1,
        title: val,
        completed: false
      });
    }
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo 1",
          completed: false
        },
        {
          id: 2,
          title: "Todo 2",
          completed: false
        },
        {
          id: 3,
          title: "Todo 3",
          completed: false
        }
      ]
    };
  }
};
</script>

<style scoped>
#app {
  margin: 0;
}
</style>
