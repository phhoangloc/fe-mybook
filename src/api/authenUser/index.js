import Api from "../Api"
const url = process.env.REACT_APP_URL + "userAuthen/" 
const GetUserAuthen = () => {
    return Api.get(url + 'user')
}
const CreatBook = (body) => {
    return Api.post(url + 'book', body)
}

const UpdatePdf = (fileImage) => {
    const formdata = new FormData()
    formdata.append('file', fileImage)
    return Api.post(url + 'book/pdf/', formdata)
}

const UpdateCover = (fileImage) => {
    const formdata = new FormData()
    formdata.append('file', fileImage)
    return Api.post(url + 'book/image/', formdata)
}
const UpdateAvata = (fileImage) => {
    const formdata = new FormData()
    formdata.append('file', fileImage)
    return Api.post(url + 'user/avata/', formdata)
}

const UpdateProfileInfor = (infor) => {
    const body = { infor }
    return Api.put(url + "user/a", body)
}
const UpdateBook = (id, body) => {
    return Api.put(url + "book/" + id, body)
}
const DeleteBook = (id) => {
    return Api.delete(url + "book/" + id)
}
const borrowBook = (body) => {
    return Api.post(url + "/borrow", body)
}
const viewcart = () => {
    return Api.get(url + "/borrow")
}
const deletecart = (id) => {
    return Api.delete(url + "/borrow/"+id)
}
const deleteAllcart = () => {
    return Api.post(url + "/deleteAllCart/")
}
const AuthenUserApi = {
    GetUserAuthen,
    CreatBook,
    UpdateCover,
    UpdateBook,
    DeleteBook,
    UpdateAvata,
    UpdateProfileInfor,
    UpdatePdf,
    borrowBook,
    viewcart,
    deletecart,
    deleteAllcart
}

export default AuthenUserApi