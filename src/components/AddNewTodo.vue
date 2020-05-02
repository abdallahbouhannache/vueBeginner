<template>
  <div>
    <div class="wrpAddN">
      <label for="nVal" class="writeNewVal">WriteNewValue</label>
      <input type="text" name="newVal" id="nVal" v-model="newVal" />
      <input
        type="button"
        class="btn green addNewVal"
        value="add New Value"
        @click="$emit('addNewTD',newVal)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewTodo",
  data() {
    return {
      newVal: ""
    };
  }
};
</script>

<style>
.labelclss {
  color: blue;
  font-size: 1.5em;
  text-transform: capitalize;
}
.wrpAddN {
  display: inline-block;
  min-width: 300px;
  border: 1px solid rgb(0, 0, 0);
  padding: 20px;
}
#nVal {
  font-size: 1.4em;
  color: green;
  font-weight: 600;
}
.addNewVal {
}
.writeNewVal {
  font-size: 1.4em;
  color: blue;
  font-weight: 600;
}
</style>