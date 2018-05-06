<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <gallery-list></gallery-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import GalleryList from '@/components/GalleryList.vue'

export default {
  name: 'home',
  created(){
    this.$store.dispatch({type: 'loadGallery'})
  },
  components: {
    // HelloWorld
    GalleryList

  }
}
</script>
