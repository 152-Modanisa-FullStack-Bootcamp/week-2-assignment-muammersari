<template>
  <div class="products-container">
    <div class="images">
      <img class="image" :src="product.coverImage" :alt="product.description" />
      <img
        class="image1"
        :src="product.hoverImage"
        :alt="product.description"
      />
    </div>
    <div class="rightArea">
      <span class="title">{{ product.title }}</span>
      <div class="view-date">
        <span class="count">{{ product.viewCount }} views</span>
        <span class="date">{{ product.publishDateInMonth }} months ago</span>
      </div>
      <div class="ownerArea">
        <img class="ownerImage" :src="product.ownerImage" />
        <span class="ownerName">{{ product.ownerName }}</span>
      </div>
      <div class="descriptionArea">
        <span class="description">{{ product.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoritesProduct",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.products-container {
  margin-top: 60px;
  box-shadow: 0px 0px 1px 0px gray;
  display: flex;
}
.image,
.image1 {
  width: 360px;
  height: 200px;
}
.images img:last-child {
  display: none;
}
.images:hover img:last-child {
  display: block;
}
.images:hover img:first-child {
  display: none;
}
.rightArea {
  margin-left: 20px;
  padding-top: 10px;
}
.title {
  width: 220px;
  font-size: 22px;
  font-weight: 600;
}
.view-date {
  margin-top: 5px;
  font-size: 14px;
  color: gray;
}
.ownerArea {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.ownerImage {
  height: 24px;
  width: 24px;
  border-radius: 12px;
  margin-right: 10px;
}
.ownerName {
  font-size: 14px;
  color: rgb(80, 78, 78);
}
.descriptionArea {
  margin-top: 20px;
}
.description {
  font-size: 14px;
  color: rgb(80, 78, 78);
}
</style>