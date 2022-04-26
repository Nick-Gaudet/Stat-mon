<template>
    <form @submit.prevent="register">
            <div class="emailField">
                <label for="email"> Email: </label>
                <input type="text" v-model="email" name="email" placeholder="Email"/>
            </div>
            <div class="nameField">
                <label for="name"> Name: </label>
                <input type="text" v-model="name" name="name" placeholder="Name"/>
            </div>
            <div class="passwordField">
                <label for="password"> Password: </label>
                <input type="password" v-model="password" name="password" placeholder="Password"/>
            </div>
            <div v-if="errorMessage"> {{errorMessage}} </div>
            <div class="submitButton">
                <button class="btn"> Register </button>
            </div>
    </form>
</template>

<script>
/* eslint-disable*/

import loginAuth from "../js/loginAuthentication"
export default {
    name: "RegisterForm",
    data(){
        return{
            name: "",
            email: "",
            password: "",
            errorMessage: ""
        }
    },
    methods:{
        register(){
            loginAuth.register(this.email,this.name,this.password, (res) =>{
                if(res.auth){ // if authenticated
                    this.$router.replace("/");
                }else{
                    this.errorMessage = "User account already exists!"
                }
            })

        }
    }
}
</script>