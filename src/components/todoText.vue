/* eslint-disable */
<template>
  <body>
    <div class="main">
      <div class="show-list-todo" v-cloak>
        <ul class="todo--list">
          <li class="todo-item">
            <div
              class="todo-text"
              v-bind:class="{
                isDone: isDone,
              }"
            >
              {{ textContent }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "todoText",

  components: {},
  data() {
    return {
      todoLists: this.$store.state.todoList.data,
    };
  },
  computed: {
    isDone() {
      let id = this.$route.params.id;
      let textTodoChose = this.todoLists.find(function (dataToFind) {
        return dataToFind.id === id;
      });
      return textTodoChose.checkstatus === "f" ? false : true;
    },
    textContent() {
      console.log("tesr");
      let id = this.$route.params.id;
      let textTodoChose = this.$store.state.todoList.data.find(function (dataToFind) {
        return dataToFind.id === id;
      });

      let text = textTodoChose.text;

      return text;
    },
  },
  // // created() {
  // //   const index = Number(this.$route.params.index);
  // //   console.log(index);
  // //   console.log(this.todoList);

  // //   this.todoItems.push(this.$store.state.todoList[index]);
  // // },
  // methods: {
  //   DeleteTodo() {},
  // },
};
</script>

<style scoped>
.todo--list {
  list-style: none;
  width: 50vw;
  min-height: 100vh;
  max-height: 20vh;
  overflow-y: auto;
  margin-top: 45vh;
}
.todo-item {
  display: block;
}
.todo-text {
  display: block;
  height: 26px;
  line-height: 26px;
}
.isDone {
  text-decoration-line: line-through;
  background-color: rgb(77 216 135);
  padding: 0 0;
}
</style>

