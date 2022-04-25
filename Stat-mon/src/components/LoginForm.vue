<template>
    <form @submit.prevent="login">
            <div class="usernameField">
                <label for="username"> Username/Email: </label>
                <input type="text" v-model="name" name="username" placeholder="Username"/>
            </div>
            <div class="passwordField">
                <label for="password"> Password: </label>
                <input type="password" v-model="password" name="password" placeholder="Password"/>
            </div>
            <div v-if="errorMessage"> {{errorMessage}} </div>
            <div class="submitButton">
                <button class="btn"> Login </button>
            </div>
    </form>
</template>
<script>
/* eslint-disable*/
export default {
    name: "LoginForm",
    data(){
        return{
            name: "Nick",
            email: "nickg@gmail.com",
            password: "password"
        }
    },
    methods:{
        login(){
            this.$router.replace("/");
        }
    }
}
</script>