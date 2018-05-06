import Vue from "vue";
import Vuex from "vuex";
import GalleryService from "../gallery.service.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgs: [
      // { imgId: 1, URL: "/img/gallery/1.jpg" },
      // { imgId: 1, URL: "/img/gallery/2.jpg" },
      // { imgId: 1, URL: "/img/gallery/3.jpg" },
      // { imgId: 1, URL: "/img/gallery/4.jpg" },
      // { imgId: 1, URL: "/img/gallery/5.jpg" }
    ],
    galleryFilter: null,
    selectedImg: null
  },
  mutations: {
    setImgs(state, {imgs}){
      state.imgs = imgs;

    }
  },
  actions: {
    loadGallery(store) {
      console.log("Loading Gallery", store.state.galleryFilter);
      return GalleryService.query(store.state.galleryFilter).then(imgs => {
        store.commit({ type: "setImgs", imgs });
      });
    }
  }
});
