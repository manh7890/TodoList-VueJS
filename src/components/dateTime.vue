<template>
  <div class="view-date">
    Your Todos for to day :
    <p class="todo-date">
      {{ currentDate() }}
    </p>
  </div>
</template>

<script>
export default {
  name: "formattedDate",
  methods: {
    currentDate() {
      var currentDate = new Date();
      var dateYear = currentDate.getFullYear();
      var dateMonth = currentDate.getMonth() + 1;
      var dateDay = currentDate.getDate();
      const formatted_date = dateDay + "/" + dateMonth + "/" + dateYear;
      console.log(formatted_date);
      return formatted_date;
    },
  },
};
</script>

<style>
</style>