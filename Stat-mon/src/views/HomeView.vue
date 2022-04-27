<template>
  <div class="home">
    <HomePage v-bind:userInfo="userInfo"/>
  </div>
</template>

<script>
// @ is an alias to /src

/* eslint-disable */
import axios from 'axios'
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage
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
