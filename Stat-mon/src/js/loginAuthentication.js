/* Login authentication by searching mongoDB */
// import axios from 'axios'
/* eslint-disable */
import dbRequests from "../router/dbRequests"

export default {
    data() {
        return { userInfo: {} }
    },
    login(email, password, callback) {
        authRequest(email, password, (res) => {
            console.log(res)
            this.userInfo = res.result// store the user info
            if (res.auth) {
                localStorage.token = res.token;
                callback({
                    auth: true,
                    token: res.token,
                    userInfo: this.userInfo
                });
                this.onLoginStatus(true);
            } else {
                delete localStorage.token;
                callback({
                    auth: false
                });
                this.onLoginStatus(false);
            }
        })
    },
    register(email,name,password,callback){ // opposite of login, logically
        authRequest(email, password, (res) => {
            if (res.auth) { // if user account already exists
                delete localStorage.token;
                callback({
                    auth: false
                });
                this.onLoginStatus(false);
            } else {
                localStorage.token = res.token;
                dbRequests.create({ email: email, name: name, password: password })
                console.log("Account Registered!")
                this.userInfo = res.result// store the user info
                callback({
                    auth: true,
                    token: res.token,
                    userInfo: this.userInfo
                });
                this.onLoginStatus(true);
            }
        })   
    },
    logout(callback) {
        delete localStorage.token;
        localStorage.clear();
        callback({
            auth: false
        });
        this.onLoginStatus(false);
        location.reload(true); // reset local storage data on logout
    },

    isLoggedIn() { return !!localStorage.token },

    onLoginStatus(status) {
        console.log(status)
    }
}
function authRequest(email, password, callback) { // Sends request to db for user info, authenticates if user info is found 

    dbRequests.findUser(email,password)
        .then(res => {
            if (res.data.length > 0) {
                callback({
                    auth: true,
                    token: Math.random().toString(36).substring(7),
                    result: res
                })
                console.log(res.data);
            } else {
                callback({
                    auth: false
                })
            }
        })
    
}
