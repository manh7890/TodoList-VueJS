<template>
  <div class="input-todo">
    <input
      type="text"
      v-model="inputValue"
      placeholder="AddTodo"
      class="user-input-todo"
      @keyup.enter="saveTodoItem"
    />

    <button class="submit-input" v-on:click="saveTodoItem">Add</button>
  </div>
</template>

<script>
export default {
  name: "InputTodo",
  pros: [],
  data() {
    return {
      inputValue: "",
    };
  },

  methods: {
    setValue(vl) {
      this.inputValue = vl;
    },
    saveTodoItem() {
      this.$emit("add-TodoItem", this.inputValue);
      this.setValue("");
    },
  },
};
</script>

<style>
</style>