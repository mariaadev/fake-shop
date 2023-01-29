<template>
  <div>
    <NavBar title="Fake Shop"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import  NavBar  from "./components/NavBar.vue"

export default defineComponent({
  name: 'AppComponent',
  components: {
      NavBar,
  },
})
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #05203b;
}

nav a.router-link-exact-active {
  color: rgba(189, 181, 255, 0.9);
}
</style>
