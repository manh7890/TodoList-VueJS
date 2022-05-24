<template>
  <div class="main">
    <formattedDate />

    <div class="todo-list-contain">
      <InputTodo
        ref="input"
        :editTaskPros="editTask"
        @add-TodoItem="saveTodoItem"
      />
      <div class="show-list-todo" v-cloak>
        <ul class="todo--list">
          <TodoItem
            v-for="(todoItem, index) in todoList"
            :key="index"
            :todoList="todoList"
            :todoProps="todoItem"
            :indexProps="index"
            @delete-todo-item="deleteTodoItem"
            @fix-todo-item="fixTodoItem"
            @change-status-todo-item="changeStatusTodoItem"
          />
          <!-- <todoText :key="index" :todoList="todoList" /> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import InputTodo from "./inputTodo.vue";
import formattedDate from "./dateTime.vue";
import TodoItem from "./todoItem.vue";

export default {
  name: "MyTestTodo",
  components: {
    InputTodo,

    TodoItem,
    formattedDate,
  },
  data() {
    return {
      editTask: null,
      editTaskIndex: null,
      todoListsData:[],
    };
  },
  mounted(){
    fetch('http://localhost/nana-framework/Task')
    .then((res)=> res.json() )
    .then(data => this.todoListsData =data)
    .catch(err=>console.log(err.message))
  },

  computed: {
    todoList() {
      // let theWordThis=this;
      this.$store.commit('changeDataOfTodoList',this.todoListsData)
      console.log('store')
      console.log(this.$store.state.todoList)
      return this.$store.state.todoList.data;
    },
  },
  methods: {
    saveTodoItem(value) {
      console.log(this.$store.state.todoList);
      console.log(this.$store.state.todoList.data);
      if (value.length === 0) return;
      if (this.editTask === null) {
        let data = {
          text: value,
          checkstatus: "f",
        };
        this.apiCreatedTodo(data);
      } else {
        let data = {
          id: this.editTask,
          text: value,
          checkstatus: "f",
        };

        this.apiUpdateTodo(data);
        this.$store.commit('changeTextInStore',{
          index:this.editTaskIndex,
          text:value
        })
        this.editTask = null;
        this.editTaskIndex = null;
      }
    },
    // addTodoItem() {
    //   if (this.inputValue.length === 0) return;
    //   if (this.editTask === null) {
    //     this.todoList.push({
    //       text: this.inputValue,
    //       isDone: false,
    //     });

    //     this.inputValue = "";
    //   } else {
    //     this.todoList[this.editTask].text = this.inputValue;

    //     this.editTask = null;
    //     this.inputValue = "";
    //   }

    //   console.log(this.inputValue);
    // },
    deleteTodoItem(id, index) {
      let data = {
        id: id,
      };
      this.apiDeleteTodo(data);

      console.log(index);
      this.$store.commit('spliceTodoItem',{
          index:index,
          numberSplice:1
        });
      
    },
    fixTodoItem(id, index) {
      this.editTask = id;
      this.editTaskIndex = index;

      let textTodoChose = this.$store.state.todoList.data.find(function (
        dataToFind
      ) {
        return dataToFind.id === id;
      });
      console.log(textTodoChose.text);
      this.$refs.input.setValue(textTodoChose.text);
    },
    changeStatusTodoItem(id, index) {
      let newStatus=''
      if(this.$store.state.todoList.data[index].checkstatus === "t"){
        newStatus='f'
      }else if (this.$store.state.todoList.data[index].checkstatus === "f") {
        newStatus='t'
      }
      let data = {
          id: id,
          
          checkstatus: newStatus,
        };

        this.apiUpdateTodo(data);

        this.$store.commit('changeStatusInStore',{
          index:index,
          newStatus:newStatus
        });
      
    },
    //Làm Việc Với Api
    apiCreatedTodo(data) {
      let api = "http://localhost/nana-framework/Task";
      let options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      };
      fetch(api, options)
        .then(function (response) {
          let response2 = response.clone();
          return response2.json();
        })
        .then((list) => {
          this.$store.state.todoList = list;
          this.todoListsData=list
          console.log(this.$store.state.todoList);
        })
        .catch(err=>{
          console.log("Có Lỗi :" + err.message)
          alert("Có Lỗi :" + err.message)
        })
    },
    apiUpdateTodo(data) {
      let api = "http://localhost/nana-framework/Task";
      let options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      };
      fetch(api, options)
        .then(function (response) {
          // console.log(response.json())
          let response2 = response.clone();
          return response2.json();
        })
        .catch(err=>{
          console.log("Có Lỗi :" + err.message)
          alert("Có Lỗi :" + err.message)
        })
        
    },
    apiDeleteTodo(id) {
      let api = "http://localhost/nana-framework/Task";
      let options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(id),
      };
      fetch(api, options)
        .then(function (response) {
          let response2 = response.clone();
          return response2.json();
        })
        .catch(err=>{
          console.log("Có Lỗi :" + err.message)
          alert("Có Lỗi :" + err.message)
        })
    },
  },
};
</script>

<style scoped>
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
  bottom: 0;
  right: 0;
  overflow-y: auto;

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
  width: 49%;
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
  width: 52vw;
  min-height: 100px;
  max-height: 35vh;
  /* overflow-y: scroll; */
  overflow-y: auto;
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
  padding: 6px;
  display: inline-block;
  background-color: rgb(75 110 229);
  color: #fff;
  border-radius: 3px;
}
</style>