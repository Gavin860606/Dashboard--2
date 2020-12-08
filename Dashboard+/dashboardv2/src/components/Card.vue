<template>
  <div class="card">
    <h2>User ID : {{ userId }}</h2>
    <h3>ID : {{ id }}</h3>
    <h4>Title : {{ title }}</h4>
    <h4>Completed : {{ completed }}</h4>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    userId: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "Default",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  width: 300px;
  border-radius: 20px;
  box-shadow: 0 0 60px 0 rgba(64, 109, 139, 0.49);
  background-color: #ffffff;
  margin: 0.5rem;
}
</style>
