import Api from "../Api"
const url= "http://localhost:4000/user/"
const Login=(body)=>{
    return Api.post(url+'login',body)
}
const CreateUser=(body)=>{
    return Api.post(url,body)
}
const UserApi={
    Login,
    CreateUser
}

export default UserApi