<template>
  <div class="favorite-list-container">
    <Header></Header>
    <FavoritesProduct
      v-for="product in this.$store.state.favoritesList"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<script>
import Header from "@/components/Header";
import FavoritesProduct from "@/components/FavoritesProduct";

export default {
  name: "FavoritesPage",
  components: {
    Header,
    FavoritesProduct,
  },
};
</script>

<style >
.favorite-list-container {
  display: flex;
  justify-content: space-between;
  width: 1100px;
  flex-wrap: wrap;
  padding: 10px 20px;
}
</style>