<template>
  <div>
    <h2 @click="home" class="favoritescount">Home</h2>

    <div>UserId = {{ $route.params.userId }}</div>
    <div>watchId = {{ $route.params.watch }}</div>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>
