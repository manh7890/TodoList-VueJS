<template>
  <header>
    
    <div class="left-menu">
      <div class="todolist-title">Todos App</div>
    </div>
    <div class="right-menu">
      <ul class="right-menu__list">
        <router-link :to="{name:'Home'}"><li class="right-menu__item">Home</li></router-link>
        <router-link :to="{name:'Aggrid'}"><li class="right-menu__item">Grouping</li></router-link>
        
        <li class="right-menu__item">Contact</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
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
  height: 0;
}
header {
  background-color: black;
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 46px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.left-menu {
  color: #fff;
  line-height: 46px;
  margin: 0 14px 0;
  font-size: 22px;
}
.right-menu {
  color: #fff;
  list-style: none;
}
.right-menu__item {
  display: inline-block;
  margin: 0 14px 0;
  line-height: 46px;
  color: #fff;
}
</style>