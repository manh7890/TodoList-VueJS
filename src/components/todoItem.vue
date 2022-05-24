<template>
  <li class="todo-item">
    <div
      v-bind:class="{
        isDone:
          todoProps.checkstatus === 't'
            
      }"
      @click="
        changeStatusTodoItem
      "
      class="todo-text"
    >
      {{ todoProps.text }}
    </div>
    <div class="todo-icon">
      <div
        class="todo-item-fix"
        @click="
          fixTodoItem
        "
      >
        <i class="fa-solid fa-pen"></i>
      </div>
      <div
        class="todo-item-delete"
        @click="
          deleteTodoItem
        "
      >
        <i class="fa-solid fa-trash-can"></i>
      </div>
      <div class="todo-item-link">
        <router-link
        :to="{name:'TodoItem', params:{id:todoProps.id}}"
         
        >
          <i class="fa-solid fa-link"></i>
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  
  props: {
    todoProps:{
      default: {}
    },
    indexProps:{
      default: -1
    },
    todoList:{
      default: []
    },
  },
  
  methods:{
    deleteTodoItem(){
      this.$emit(
            'delete-todo-item',
            this.todoProps.id,
            this.indexProps
          )
    },
    fixTodoItem(){
      this.$emit(
            'fix-todo-item',
            this.todoProps.id,
            this.indexProps
          )
    },
    changeStatusTodoItem(){
      this.$emit(
          'change-status-todo-item',
          this.todoProps.id,
          this.indexProps,
          this.todoProps.text
        )
    }

  },
};

</script>

<style scoped>
</style>