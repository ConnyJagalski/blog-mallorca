<template>
  <header-all />
  <home-view />
  <heading-pics-description
    headline="Demnächst"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel"
  />
  <hr />
  <heading-pics-description headline="Aktuelles"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel"/>
  <hr />
  <heading-pics-description headline="Neueste Beiträge"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel"/>
  <hr />
  <heading-pics-description headline="Beliebt"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel"/>
  <hr />
  <heading-pics-description headline="Shop"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel"/>
  <hr>
  <heading-pics-description headline="Auswandern"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel"/>
  <hr />
</template>

<script>
import HeaderAll from './views/HeaderAll.vue'
import HomeView from './views/HomeView.vue'
import HeadingPicsDescription from './views/HeadingPicsDescription.vue'

export default {
  components: { HeaderAll, HomeView, HeadingPicsDescription }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Indie+Flower&family=Satisfy&display=swap');

/* font-family: 'Indie Flower', cursive;
font-family: 'Satisfy', cursive; */
</style>
