import Api from "../Api"
const url="http://localhost:4000/userAuthen/"
const UserLogin=()=>{
    return Api.get(url+'user')
}
const AuthenUserApi={
    UserLogin
}

export default AuthenUserApi