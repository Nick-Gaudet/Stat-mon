<template>
    <div id="form">
    <form @submit.prevent="login">
        <div class="inputs">
            <div class="field">
                <label for="email" class="label"> Email: </label>
                <input type="text" class="input" v-model="email" name="email" placeholder="Email"/>
            </div>
            <div class="field">
                <label for="password" class="label"> Password: </label>
                <input  type="password" class="input" v-model="password" name="password" placeholder="Password"/>
            </div>
        </div>
        <div class="submits">
            <div v-if="errorMessage"> {{errorMessage}} </div>
                <div class="submitButton">
                    <button class="btn btn-outline-dark" > Login </button>
            </div>
        </div>
    </form>
    </div>
</template>
<script>
/* eslint-disable*/

import loginAuth from "../js/loginAuthentication"
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
                    localStorage.setItem("email",this.email)
                    localStorage.setItem("name",res.userInfo[0].name)
                    localStorage.setItem("password",this.password)
                    this.$router.replace("/");
                }else{
                    this.errorMessage = "User Doesn't Exist! Please Register!"
                }
            })

        }
    }
}
</script>
<style lang="scss">
    .form{
        margin: auto;
    }
    .inputs{
        width: 100%;
        display: block;
        vertical-align: -webkit-baseline-middle;
        padding-right: 2rem;
        padding-left: 2rem;

    }
    .field{
        width:50%;
        display:inline-block;
        margin: 0.1rem;
    }

    .label{
        max-width: 20%;
        width:10%;
        text-align: left;
        margin: auto;
        float:left;
        padding-right: 4rem;
    }
    .input{
        width:50%;
        height:2rem;
        float:right;
        text-align: center;
        font-size: 60%;

    }
    .submitButton{
        margin:1rem auto;
    }

</style>