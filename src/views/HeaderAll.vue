<template>
  <main>
    <input type="checkbox" name="menu" id="menu" v-model="mainStore.burgerActive" />
    <label for="menu">
      <font-awesome-icon icon="fa-solid fa-bars" style="color: antiquewhite" id="menu-icon" />
    </label>
    <div>
      <h1>Mallorca</h1>
    </div>
  </main>
</template>

<script>
import { useMainStore } from '@/stores/mainStore.js'

export default {
  name: 'HeaderAll',
  setup() {
    const mainStore = useMainStore()
    return {
      mainStore
    }
  }
}
</script>

<style scoped>
#menu {
  display: none;
}

#menu-icon {
  cursor: pointer;
}

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
  color: antiquewhite;
  text-shadow: purple 1px 1px 5px;
}
</style>
