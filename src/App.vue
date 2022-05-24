<template>

    
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />

  <MyHeader></MyHeader>
  <body>
    <router-view> </router-view>
  </body>
</template>

<script>
import MyHeader from "./components/Header";

export default {
  name: "App",
  components: {
    MyHeader,
    // AgGridVue,
    // Home,
    // InputTodo,
    // //  MyTodos
    // TodoItem,
    // formattedDate,
  },
};
//   data() {
//     return {
//       editTask: null,
//       todoList: [],

//     };
//   },
//   computed: {},
//   methods: {
//     saveTodoItem(value) {
//       // console.log(this.inputValue)
//       // this.inputValue = value;
//       console.log(value);
//       if (value.length === 0) return;
//       if (this.editTask === null) {
//         this.todoList.push({
//           text: value,
//           isDone: false,
//         });
//         // console.log( this.inputValue)
//       } else {
//         this.todoList[this.editTask].text = value;
//         this.editTask = null;
//       }
//     },
//     // addTodoItem() {
//     //   if (this.inputValue.length === 0) return;
//     //   if (this.editTask === null) {
//     //     this.todoList.push({
//     //       text: this.inputValue,
//     //       isDone: false,
//     //     });

//     //     this.inputValue = "";
//     //   } else {
//     //     this.todoList[this.editTask].text = this.inputValue;

//     //     this.editTask = null;
//     //     this.inputValue = "";
//     //   }

//     //   console.log(this.inputValue);
//     // },
//     deleteTodoItem(index) {
//       this.todoList.splice(index, 1);
//     },
//     fixTodoItem(index) {
//       this.editTask = index;
//       // this.inputValue = this.todoList[index].text;
//       this.$refs.input.setValue(this.todoList[index].text)
//     },
//     doneTodoItem(index) {
//       if (this.todoList[index].isDone) {
//         this.todoList[index].isDone = false;
//       } else {
//         this.todoList[index].isDone = true;
//       }
//     },
//   },
// };
</script>

<style  >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-family: Arial, Helvetica, sans-serif;
  scroll-behavior: smooth;
}

body {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  right: 0;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgb(249 66 153),
    rgb(166 68 177),
    rgb(249 66 153),
    rgb(166 68 177)
  );
}

.view-date {
  text-align: center;
  padding-top: 20vh;
  font-size: 26px;
}
.todo-date {
  display: inline-block;
}
.input-todo {
  display: flex;
  justify-content: center;

  margin-top: 5vh;
}
.user-input-todo {
  width: calc(52% - 40.47px);
  border: 0.5px solid #333;
  height: 30px;
  padding: 5px;
  border-radius: 3px;
}
.user-input-todo:focus {
  border: 1px solid #333;
}
.submit-input {
  background-color: rgb(77 216 135);
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  padding: 6px;
}
.show-list-todo {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.todo--list {
  list-style: none;
  width: 50vw;
}
.todo-item {
  background-color: #fff;
  padding: 6px;
  margin: 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-text {
  flex: 1;
}
.isDone {
  text-decoration-line: line-through;
  background-color: rgb(77 216 135);
  padding: 6px 0;
}
.todo-item-fix {
  display: inline-block;
  background-color: rgb(253 0 0);
  color: #fff;
  padding: 6px;
  margin-right: 4px;
  border-radius: 3px;
}
.todo-item-delete {
  padding: 6px 7px;
  display: inline-block;
  background-color: rgb(75 110 229);
  color: #fff;
  border-radius: 3px;
  margin-right: 4px;
}
.todo-item-link {
  display: inline-block;
  padding: 6px 4px;
  background-color: #12d62c;
  color: #fff;
  border-radius: 3px;
}
</style>