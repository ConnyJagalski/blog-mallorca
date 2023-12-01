<template>
  <header>
    <h2>Dein Inselführer</h2>
    <h3>Freizeit, Reise, Auswandern - Alles auf einer Seite!</h3>
    <hr />
  </header>
  <my-story />
</template>

<script>
import MyStory from './MyStory.vue'

export default {
  name: 'HomeView',
  components: { MyStory }
}
</script>

<style scoped>
header {
  text-align: center;
}
</style>
