<template>
    <div id="form">
    <form @submit.prevent="register">
        <div class="inputs">
            <div class="field">
                <label for="email" class="label"> Email: </label>
                <input type="text" class="input" v-model="email" name="email" placeholder="Email"/>
            </div>
            <div class="field">
                <label for="name" class="label"> Name: </label>
                <input type="text" class="input" v-model="name" name="name" placeholder="Name"/>
            </div>
            <div class="field">
                <label for="password" class="label"> Password: </label>
                <input  type="password" class="input" v-model="password" name="password" placeholder="Password"/>
            </div>
        </div>
        <div class="submits">
            <span v-if="score < 2 && !!password">Use Stronger Password!</span>
            <password-meter @score="onScore" class='passwordMeter' :password="password"/>
            <div v-if="errorMessage"> {{errorMessage}} </div>
            <div v-if="score >= 2" class="submitButton">
                <button class="btn btn-outline-dark" > Register </button>
            </div>
        </div>
    </form>
    </div>
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
            // 0 to 4
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
                    localStorage.setItem("email",this.email)
                    localStorage.setItem("name",this.name)
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
    max-width: 20%;
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