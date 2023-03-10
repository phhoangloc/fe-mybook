import Api from "../Api"

const url = process.env.REACT_APP_URL

const getBookTop4New = () => {
    return Api.get(url+'?limit=4&sortbyid=-1')
}
const getBookBySlug = (slug) => {
    return Api.get(url + slug)
}

const BookApi={
    getBookTop4New,
    getBookBySlug
}

export default BookApi