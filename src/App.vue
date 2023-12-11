<template>
  <side-bar />
  <header-all />
  <router-view />
</template>

<script>
import HeaderAll from './views/HeaderAll.vue'
import SideBar from './views/SideBar.vue'

export default {
  components: { HeaderAll, SideBar }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Indie+Flower&family=Satisfy&display=swap');

/* font-family: 'Indie Flower', cursive;
font-family: 'Satisfy', cursive; */
</style>
