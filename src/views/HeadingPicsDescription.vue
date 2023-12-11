<template>
  <h2>{{ headline }}</h2>
  <div>
    <figure v-for="index in 5" :key="index">
      <router-link to="/demnächst/eins">
        <img :src="imgSrc" :alt="imgAltText" />
      </router-link>
      <figcaption>{{ captionText }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'HeadingPicsDescription',
  props: ['headline', 'imgSrc', 'imgAltText', 'captionText']
}
</script>

<style scoped>
div {
  display: flex;
  overflow: auto;
  width: 100%;
}

figure {
  width: 110px;
}

img {
  width: 110px;
  background: black;
}
</style>
