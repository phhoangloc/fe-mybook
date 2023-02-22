import Api from "../Api"
const url="http://localhost:4000"

const getBookTop4New = () => {
    return Api.get(url+'/?limit=4&sortbyid=-1')
}

const BookApi={
    getBookTop4New
}

export default BookApi