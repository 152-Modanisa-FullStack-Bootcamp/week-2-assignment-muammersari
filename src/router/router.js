import VueRouter from "vue-router";
import Vue from "vue";
import ProductListingPage from "@/views/ProductListingPage";
import FavoritesPage from "@/views/FavoritesPage";
import WatchPage from "@/views/WatchPage";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ProductListingPage },
    { path: "/favorites/:userId", component: FavoritesPage },
    { path: "/watchPage/:userId/:watch", component: WatchPage },
  ],
});

export default router;
