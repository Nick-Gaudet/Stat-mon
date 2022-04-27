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
                <span v-if="score < 2 && !!password">Use Stronger Password!</span>
                <password-meter @score="onScore" class='passwordMeter' :password="password"/>
            </div>
            <div v-if="errorMessage"> {{errorMessage}} </div>
            <div v-if="score >= 2" class="submitButton">
                <button cclass="btn btn-outline-dark" > Register </button>
            </div>
    </form>
</template>

<script>
/* eslint-disable*/
import { ref } from 'vue';
import PasswordMeter from 'vue-simple-password-meter'
import loginAuth from "../js/loginAuthentication"
export default {
    name: "RegisterForm",
    components: { PasswordMeter },
    data(){
        /* referenced : https://github.com/miladd3/vue-simple-password-meter/tree/next */
        const password = ref('');
        const score = ref(null);
        const onScore = (res) => {
            // from 0 to 4
            // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure'
            score.value = res.score;
        };
        return{
            name: "",
            email: "",
            errorMessage: "",
            password,
            score,
            onScore
        }
    },
    methods: {
        register(){
            loginAuth.register(this.email,this.name,this.password, (res) =>{
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

<style lang="scss">

span{
    display: block;
}
//npm install vue-simple-password-meter@next --save GLOBAL references
button{
    border: 0.2px black;
}
.po-password-strength-bar {
    border-radius: 2px;
    transition: all 0.2s linear;
    height: 5px;
    max-width: 10rem;
    margin: auto;
    margin-top: 8px;
}

.po-password-strength-bar.risky {
    background-color: #f95e68;
    width: 10%;
}

.po-password-strength-bar.guessable {
    background-color: #fb964d;
    width: 32.5%;
}

.po-password-strength-bar.weak {
    background-color: #fdd244;
    width: 55%;
}

.po-password-strength-bar.safe {
    background-color: #07e91d;
    width: 77.5%;
}

.po-password-strength-bar.secure {
    background-color: #15963c;
    width: 100%;
}
</style>