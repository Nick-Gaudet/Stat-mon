<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
  import NavBar from './components/NavBar.vue'
  export default {
    name: 'App',
    components: {NavBar}
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #dbe1e8;

    &.router-link-exact-active {
      color: #1c5ca6;
    }
  }
}
</style>
