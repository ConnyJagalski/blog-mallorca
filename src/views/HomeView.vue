<template>
  <header>
    <h2>Dein Inselführer</h2>
    <h3>Freizeit, Reise, Auswandern - Alles auf einer Seite!</h3>
    <hr />
  </header>
  <my-story />
  <heading-pics-description
    headline="Demnächst"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel"
    id="demnächst"
  />
  <hr />
  <heading-pics-description headline="Aktuelles"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel" id="aktuelles"
    />
  <hr />
  <heading-pics-description headline="Neueste Beiträge"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel" id="neueste"/>
  <hr />
  <heading-pics-description headline="Beliebt"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel" id="beliebt"/>
  <hr />
  <heading-pics-description headline="Shop"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel" id="shop"/>
  <hr>
  <heading-pics-description headline="Auswandern"
    imgSrc=src/assets/pictures/whats-next.jpg
    captionText="dies ist ein beispiel" id="auswandern"/>
  <hr />
</template>

<script>
import MyStory from './MyStory.vue'
import HeadingPicsDescription from './HeadingPicsDescription.vue'

export default {
  name: 'HomeView',
  components: { MyStory, HeadingPicsDescription }
}
</script>

<style scoped>
header {
  text-align: center;
}
</style>
