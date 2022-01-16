<template>
  <div class="header-container">
    <input id="search-input" type="text" placeholder="Saeach" />
    <span @click="navigateToFavoritePage" class="favoritescount">
      {{ this.$store.state.favoritesList.length }}
      Favorites</span
    >
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigateToFavoritePage() {
      this.$router.push("/favorites/bootcamp");
    },
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(211, 194, 194);
  padding: 10px 20px;
  margin-top: 50px;
  width: 100%;
}

#search-input {
  height: 30px;
  width: 75%;
  border-style: none;
  border-bottom: 1px solid rgb(177, 168, 168);
  outline: none;
}
#search-input:hover {
  border-bottom: 1.2px solid gray;
}
.favoritescount{
  color: rgba(17, 106, 148, 0.876);
  font-size: 16px;
  font-weight: 700;
}
.favoritescount:hover{
  font-size: 17px;
  color: rgb(100, 26, 129);
}
</style>