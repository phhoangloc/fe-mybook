import Api from "../Api"
const url = process.env.REACT_APP_URL+"user/" 
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