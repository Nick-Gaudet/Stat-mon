<template>
  <div class="home">
    <HelloWorld v-bind:userInfo="userInfo"/>
  </div>
</template>

<script>
// @ is an alias to /src

/* eslint-disable */
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{
      userInfo : {
        name: localStorage.name,
        email: localStorage.email,
        password: localStorage.password
      }
    }
  }
}
</script>
