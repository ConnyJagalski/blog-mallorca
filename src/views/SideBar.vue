<template>
  <transition name="burger-menu">
    <div v-if="mainStore.burgerActive" id="menu">
      <input type="checkbox" id="close-mark" v-model="mainStore.burgerActive" />
      <label for="close-mark">
        <font-awesome-icon icon="fa-solid fa-xmark" style="color: antiquewhite" id="xmark" />
      </label>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { useMainStore } from '@/stores/mainStore.js'

export default {
  name: 'SideBar',
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
  width: fit-content;
  height: 100vh;
  position: fixed;
  font-size: 1.5rem;
  background: purple;
  left: -1rem;
}

.burger-menu-enter-active,
.burger-menu-leave-active {
  transition: opacity 0.5s ease;
}

.burger-menu-enter-from,
.burger-menu-leave-to {
  opacity: 0;
}

#xmark {
  position: relative;
  left: 85%;
  top: 1rem;
  cursor: pointer;
}

#close-mark {
  display: none;
}
</style>
