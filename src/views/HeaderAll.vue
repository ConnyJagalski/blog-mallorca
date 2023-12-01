<template>
  <main>
    <font-awesome-icon icon="fa-solid fa-bars" style="color: white" />
    <div><h1>Mallorca</h1></div>
  </main>
</template>

<script>
export default {
  name: 'HeaderAll'
}
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  background-image: url('../assets/pictures/waves.jpg');
  background-size: cover;
  background-position: center;
}

div {
  width: 100%;
  display: flex;
  justify-content: center;
}

h1 {
  margin: 0;
  color: white;
  text-shadow: purple 1px 1px 5px;
}
</style>
