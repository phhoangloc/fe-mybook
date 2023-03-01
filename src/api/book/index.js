import Api from "../Api"
const url="http://localhost:4000"

const getBookTop4New = () => {
    return Api.get(url+'/?limit=4&sortbyid=-1')
}
const getBookBySlug = (slug) => {
    return Api.get(url + '/' + slug)
}

const BookApi={
    getBookTop4New,
    getBookBySlug
}

export default BookApi