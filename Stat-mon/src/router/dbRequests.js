/* eslint-disable */
import axiosSetup from "../axiosSetup"

class database { // create axios get requests to db
    create(data) {return axiosSetup.post("/accounts", data)};
    findUser(email,password) {return axiosSetup.get('/accounts/'+email+"/"+password)}
}
export default new database();