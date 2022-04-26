<template>
    <div>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="standings">Standings</router-link> |
        <router-link v-if="!isLoggedIn" to="login">Login</router-link>
        <a v-if = 'isLoggedIn' v-on:click="logout"> Logout </a>
    </nav>
    </div>
</template>

<script>
/* eslint-disable */
import auth from '../js/loginAuthentication.js'
    export default {
        name : 'NavBar',
        data(){
            return { isLoggedIn: auth.isLoggedIn()};
        },
        created(){
            auth.onLoginStatus = isLoggedIn =>{
                this.isLoggedIn = isLoggedIn;
            }
        },
        methods: {
            logout: function(){
                auth.logout((res) =>{
                    console.log(res)
                });
            }
        }
    }

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
router-link , a{
  margin: 1rem;
  text-decoration: none;
}
.main_head  nav {
  // padding: 30px;
  margin-bottom: 200px;
  font-size: 50%;
  a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    &.router-link-exact-active {
      color: #ffffffa6;
    }
  }
}
</style>
