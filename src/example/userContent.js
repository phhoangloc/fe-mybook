
import React from 'react'
import { Grid } from '@mui/material'
import {Link} from 'react-router-dom'
import Style from '../asset/style'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import store from '../redux/store';
import { setSlugInput } from '../redux/reducer/slugInputReducer';
import AuthenUserApi from '../api/authenUser';
import { setPopUp } from '../redux/reducer/popUpReducer';
import { setEdit } from '../redux/reducer/editReducer';
export const UserContent = (props) => {

    const {i,data}=props

    const userbooks = data && data.books
    
    const ClickDelete = async (id) => {
        const result = await AuthenUserApi.DeleteBook(id)
        if(result.success){
            store.dispatch(setPopUp({status:"open", success: result.success, message:result.message}))
            setTimeout(() => {
              store.dispatch(setPopUp({ status:"close", msg: "" }))
              window.location.href="/"
          }, 1000)
          }else{
            store.dispatch(setPopUp({status:"open", success: result.success, message:result.message}))
            setTimeout(() => {
              store.dispatch(setPopUp({ status:"close", msg: "" }))
          }, 1000)
        }
    }

    const returnbooks = userbooks && userbooks.map((item, index) =>
        <Grid container sx={[Style.userPage.content.book.title]}
            key={index}><input type="checkbox" />
            <h3>{item.name}</h3>
            <Link to={'/book/' + item.slug}><EditIcon onClick={()=>store.dispatch(setEdit(true))} /></Link>
            <DeleteIcon onClick={()=>ClickDelete(item._id)} />
        </Grid>
    )

    const openSlugModel = () => {
        store.dispatch(setSlugInput("100px"))
    }

    
    return (
    <Grid sx={[Style.userPage.content]}>
        {i===0?
        <Grid>
            <h2>{data && data.username}</h2>
            <h2>{data && data.infor && data.infor.address}</h2>
        </Grid>:null}
        {i===1?
        <Grid sx={[Style.userPage.content.book]}>
                    <h2>Book</h2>
                    <h3 style={Style.userPage.content.book.button} onClick={()=>openSlugModel()}>Sell book</h3>
            {returnbooks}
        </Grid>:null}
    </Grid>
    )
}
