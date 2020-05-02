<template>
  <div class="todoItem">
    <div class="todoContent">
      <input type="checkbox" v-on:change="markeBox" />
      <p>
        <label for="name" class="labelclss">{{todoname}}</label>
        <input
          id="todoname"
          v-model="todoData.title"
          type="text"
          name="todoname"
          v-bind:disabled="active"
        />
      </p>
    </div>
    <div class="btns">
      <button class="btn blue edit_btn" v-on:click="edit_todo">edit</button>
      <button class="btn red del_btn" @click="$emit('del-todo',todoData.id)">del</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todoData"],
  data() {
    return {
      errors: [],
      todoname: "todo00",
      todovalue: "empty",
      age: null,
      movie: null,
      active: true
    };
  },
  methods: {
    markeBox() {
      this.todoData.completed = !this.todoData.completed;
    },
    edit_todo() {
      this.active = !this.active;
    }
  }
};
</script>

<style scoped>
.todoItem {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 0.5px solid rgb(0, 0, 0);
  border-top: 0;
  align-items: center;
  padding-right: 30px;
}
.todoContent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 20px;
}
.todoContent > h1 {
  padding-left: 20px;
}
.btns {
  display: flex;
  height: 35px;
}
.btns > button {
  margin: 0 20px;
}
.labelclss {
  color: blue;
  font-size: 1.5em;
  text-transform: capitalize;
}
#todoname {
  font-size: 1.4em;
  color: rgb(41, 255, 4);
}
#todoname:disabled {
  color: rgb(9, 61, 25);
}
</style>