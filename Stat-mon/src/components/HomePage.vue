<template>
  <div class="hello">
    <h1 v-if="!isLoggedIn">Please Login to Display Data!</h1>
    <h1 v-if="isLoggedIn">{{ userInfo.name }}!</h1>
    <h1 v-if="isLoggedIn">Welcome to Stat-mon!</h1>
  </div>
</template>

<script>
/* eslint-disable */

import loginAuth from "../js/loginAuthentication"

export default {
  name: 'HelloWorld',
  props: ["userInfo"],
  data(){
    return{
      isLoggedIn : loginAuth.isLoggedIn()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 2rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
