import axios from 'axios';

const Users_API_BASE_URL = "http://localhost:3003/users";

class LoginService
 {

    getUsers(){
        return axios.get(Users_API_BASE_URL);
    }

    addUser(user){
        return axios.post(Users_API_BASE_URL, user);
    }
}
export default new LoginService()