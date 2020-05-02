<template>
  <div class="todosdiv">
    <div class="todoItem" v-bind:key="todo.id" v-for="todo in todos">
      <Todo v-bind:todoData="todo" v-on:del-todo="$emit('del-todo',todo.id)" />
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  name: "Todos",
  components: {
    Todo
  },
  props: ["todos"]
};
</script>

<style scoped>
.todosdiv {
  display: flex;
  flex-direction: column;
}
</style>
