<template>
  <side-bar>
    <ul>
      <li><a href="#demnächst">Demnächst</a></li>
      <li><a href="#aktuelles">Aktuelles</a></li>
      <li><a href="#neueste">Neueste Beiträge</a></li>
      <li><a href="#beliebt">Beliebt</a></li>
      <li><a href="#shop">Shop</a></li>
      <li><a href="#auswandern">Auswandern</a></li>
    </ul>
  </side-bar>
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
