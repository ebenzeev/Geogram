<template>
  <div class="gallery-container">
    <h1>Gallery List</h1>
       <ul>
           <li v-for="img in imgs">
               <gallery-preview :img="img"></gallery-preview>
              
           </li> 
       </ul>
  </div>
</template>

<script>
import GalleryPreview from "./GalleryPreview";
export default {
  name: "GalleryList",
  computed: {
    imgs() {
      return this.$store.state.imgs;
    }
  },
  components: {
    GalleryPreview
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px; */
}
li{
  width: 600px;
  /* height: 750px; */
  text-align: left;

}
</style>
