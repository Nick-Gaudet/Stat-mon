<template>
    <form @submit.prevent="login">
            <div class="emailField">
                <label for="email"> Email: </label>
                <input type="text" v-model="email" name="email" placeholder="Email"/>
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

import loginAuth from "../js/loginAuthentication"
import database from "../router/dbRequests"
export default {
    name: "LoginForm",
    data(){
        return{
            name: "Nick",
            email: "",
            password: "",
            errorMessage: ""
        }
    },
    methods:{
        login(){
            loginAuth.login(this.email,this.password, (res) =>{
                if(res.auth){ // if authenticated
                    this.$router.replace("/");
                }else{
                    this.errorMessage = "User Doesn't Exist! Please Register!"
                }
            })

        }
    }
}
</script>