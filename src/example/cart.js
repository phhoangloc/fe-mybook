import React, { useEffect } from 'react'
import { useState } from 'react'
import store from '../redux/store'
import { Grid } from '@mui/material'
import Style from '../asset/style'
import Theme from '../asset/theme'
import CloseIcon from '@mui/icons-material/Close';
import { setCart } from '../redux/reducer/cartReducer'
import AuthenUserApi from '../api/authenUser'
import RemoveIcon from '@mui/icons-material/Remove';
export const Cart = () => {

  const [mode, setNewMode] = useState(store.getState().mode)
  const [width, setWidth] = useState(store.getState().cart)

  const updateData = () => {
    store.subscribe(() => setNewMode(store.getState().mode))
    store.subscribe(() => setWidth(store.getState().cart))
  }

  updateData()

  const [cartData,setCartData]=useState()
  const viewcart = async ()=>{
    const result= await AuthenUserApi.viewcart()
    if(result.success){
      setCartData(result.data)
    }
  }

  useEffect(()=>{
    viewcart()
  },[cartData])

  const deleteCart=async(id)=>{
    await AuthenUserApi.deletecart(id)
  }
  const deleteAllCart=async()=>{
    await AuthenUserApi.deleteAllcart()
    store.dispatch(setCart("0"))
  }

  const borrowBook= async()=>{
    const borowedbooks = await cartData.map((item)=> item._id)
    const result = await AuthenUserApi.UpdateProfileBorowedbooks(borowedbooks)
    console.log(result)
  }
  const dataReturn=cartData && cartData.map((item,index)=>
    <Grid key={index} sx={[Style.cart.box,mode !== "dark" ? Theme.light.boxIn : Theme.dark.boxIn]}>
      <RemoveIcon sx={Style.cart.removeicon} onClick={()=>deleteCart(item._id)}/>
        <h3>borrower: <span>{item.borrower.username}</span></h3>
        <h3>lender: <span>{item.lender.username}</span></h3>
        <h3>books: </h3>
        {item.books && item.books.map((book,index)=><li key={index}>{book.name}</li>)}
    </Grid>
  )
  return (
    <Grid sx={[Style.cart, mode !== "dark" ? Theme.light : Theme.dark,{width:width}]}>
      <Grid>
        <CloseIcon onClick={()=>store.dispatch(setCart("0%"))}></CloseIcon>
        <h2>My Cart</h2>
        {dataReturn}
        {cartData && cartData.length?<><button onClick={()=>borrowBook()}>request</button>
        <button onClick={()=>deleteAllCart()}>cancel</button></>:null}
      </Grid>
    </Grid>
  )
}
