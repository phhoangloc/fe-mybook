import Api from "../Api"
const url="http://localhost:4000/userAuthen/"
const GetUserAuthen=()=>{
    return Api.get(url+'user')
}
const CreatBook=(body)=>{
    return Api.post(url+'book',body)
}
const UpdateCover = (fileImage) => {
    const formdata = new FormData()
    formdata.append('file', fileImage)
    return Api.post(url + 'book/image/',formdata)
}
const UpdateAvata = (fileImage) => {
    const formdata = new FormData()
    formdata.append('file', fileImage)
    return Api.post(url + 'user/avata/',formdata)
}
const UpdateBook = (id,body) => {
    return Api.put(url+"book/"+id,body)
}
const DeleteBook = (id) => {
    return Api.delete(url+"book/"+id)
}
const AuthenUserApi={
    GetUserAuthen,
    CreatBook,
    UpdateCover,
    UpdateBook,
    DeleteBook,
    UpdateAvata,
}

export default AuthenUserApi