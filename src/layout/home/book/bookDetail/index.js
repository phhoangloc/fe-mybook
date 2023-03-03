import React from 'react'
import { useEffect, useState,useRef } from 'react'
import BookApi from '../../../../api/book'
import { Grid } from '@mui/material'
import store from '../../../../redux/store'
import Style from '../../../../asset/style'
import Theme from '../../../../asset/theme'
import Nocover from '../../../../asset/img/nocover.png'
import EditIcon from '@mui/icons-material/Edit';
import AuthenUserApi from '../../../../api/authenUser'
import { setPopUp } from '../../../../redux/reducer/popUpReducer'
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const BookDetail = () => {

  const slug = window.location.pathname.split('/')[2]

  const [edit, setEdit] = useState(store.getState().edit)
  
  const [book, setBook] = useState(null)
  
  const [imgPre,setImgPre]=useState()

  const [fileIMG, setFileIMG] = useState()
  const [filePDF, setFilePDF] = useState()
  const [name,setName]=useState()
  const [author,setAuthor]=useState()
  const [detail, setDetail] = useState()
  const [owner,setOwner]=useState()

  const body = {name,author,owner,slug,detail}

  //DATA
  //DATA User
  const getUserLoginFromToken= async()=>{
    const result = await AuthenUserApi.GetUserAuthen()
    if (result.success) {
      setOwner(result.data._id)
    }
  }

    //DATA Book
  const getBookBySlug = async () => {
    const result = await BookApi.getBookBySlug(slug)
    if (result.success) {
      setBook(result.data)
      setName(result.data.name)
      setAuthor(result.data.author)
      setDetail(result.data.detail)
    } else {
      setBook(null)
    }
  } 

  useEffect(() => {
    getBookBySlug()
    getUserLoginFromToken()
  }, [])

  //MODE
  const [mode,setNewMode]=useState(store.getState().mode)

  const update=()=>{
    store.subscribe(() => setNewMode(store.getState().mode))
    store.subscribe(() => setEdit(store.getState().edit))
    }
  
  update()

  const coverpic=useRef()
  const uploadPdf=useRef()

  const changeCoverPic = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            setImgPre(reader.result);
            setFileIMG(file)
        }
    }
  }
  
  const changePdfFile = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            setFilePDF(file)
        }
    }
  }

  const CreateBook = async() => {
    const img =fileIMG && await AuthenUserApi.UpdateCover(fileIMG)
    const pdf =filePDF && await AuthenUserApi.UpdatePdf(filePDF)
    if (img) { body.img = img } 
    if (pdf) { body.pdf = pdf } 
    const result = await AuthenUserApi.CreatBook(body)
    if(result.success){
      store.dispatch(setPopUp({status:"open", success: result.success, message:result.msg}))
      setTimeout(() => {
        store.dispatch(setPopUp({ status:"close", msg: "" }))
        window.location.reload()
    }, 1000)
    }else{
      store.dispatch(setPopUp({status:"open", success: result.success, message:result.msg}))
      setTimeout(() => {
        store.dispatch(setPopUp({ status:"close", msg: "" }))
      }, 1000)
    }
  }
  const UpdateBook = async (id) => {
    const img =fileIMG && await AuthenUserApi.UpdateCover(fileIMG)
    const pdf =filePDF && await AuthenUserApi.UpdatePdf(filePDF)
    if (img) { body.img = img } 
    if (pdf) { body.pdf = pdf } 
    const result = await AuthenUserApi.UpdateBook(id,body)
    if(result.success){
      store.dispatch(setPopUp({status:"open", success: result.success, message:result.msg}))
      setTimeout(() => {
        store.dispatch(setPopUp({ status: "close", msg: "" }))
        window.location.reload()
    }, 2000)
    }else{
      store.dispatch(setPopUp({status:"open", success: result.success, message:result.msg}))
      setTimeout(() => {
        store.dispatch(setPopUp({ status:"close", msg: "" }))
        window.location.reload()
      }, 2000)
    }
  }

  return (
    edit ?
    <Grid sx={[mode !== "dark" ? Theme.light : Theme.dark]}>
      <Grid container sx={[Style.homepage.BoxBookDetail]}>
        <Grid item sx={[Style.homepage.BoxBookDetail.BoxIn]} xs={12} sm={4}>
          <img src={imgPre || (book && 'http://localhost:4000/img/bookcover/'+ book.img) || Nocover} />
          <input type="file" ref={coverpic} style={{ display: "none" }} onChange={(e) => changeCoverPic(e)} ></input>
          <EditIcon onClick={() => coverpic.current.click()}></EditIcon>

          <input type="file" ref={uploadPdf} style={{ display: "none" }} onChange={(e) => changePdfFile(e)} ></input>
          <UploadFileIcon onClick={() => uploadPdf.current.click()} />

        </Grid>
        <Grid item sx={[Style.homepage.BoxBookDetail.BoxIn]} xs={12} sm={8}>
          <input placeholder='name' defaultValue={book && book.name} onChange={(e) => setName(e.target.value)}></input>
          <input placeholder='author' defaultValue={book && book.author} onChange={(e) => setAuthor(e.target.value)}></input>
          <textarea placeholder='content' defaultValue={book && book.detail} onChange={(e) => setDetail(e.target.value)}></textarea>
          <button onClick={() => { book ? UpdateBook(book._id) : CreateBook() }}>{ book? "update":"create"}</button>
        </Grid>
      </Grid>
    </Grid >
    :
    <Grid sx={[mode !== "dark" ? Theme.light : Theme.dark]}>
      <Grid container sx={[Style.homepage.BoxBookDetail]}>
        <Grid item sx={[Style.homepage.BoxBookDetail.BoxIn]} xs={12} sm={4}>
          <img src={book && 'http://localhost:4000/img/bookcover/'+book.img} />
        </Grid>
        <Grid item sx={[Style.homepage.BoxBookDetail.BoxIn]} xs={12} sm={8}>
          <h2>{book && book.name}</h2>
          <h3>{book && book.author}</h3>
          <p>{book && book.owner.username}</p>
          <p style={{textAlign:"left"}} dangerouslySetInnerHTML={{__html:book && book.detail}}></p>
        </Grid>
      </Grid>
    </Grid >
    )
}
