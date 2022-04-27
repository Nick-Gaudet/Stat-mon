<template>
    <div>
    <nav>
        <router-link to="/" style="text-decoration: none">Home</router-link> |
        <router-link style="text-decoration: none" to="about">About</router-link> |
        <router-link style="text-decoration: none" to="standings">Standings</router-link> |
        <router-link style="text-decoration: none" to="rosters">Rosters</router-link> |
        <router-link v-if="!isLoggedIn" style="text-decoration: none" to="login">Login</router-link>
        <router-link v-if="!isLoggedIn" style="text-decoration: none" to="register">Register</router-link>
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
    router-link , a{
        margin: 1rem;
        text-decoration: none;
    }
    nav {
        margin-bottom: 50px;
        font-size: 90%;
        background-color: #090b0d;
    }
    a {
        font-weight: bold;
        cursor: pointer;

    }
</style>
