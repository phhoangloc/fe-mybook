import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Style from '../asset/style'
import AuthenUserApi from '../api/authenUser'
export const UserCart = (props) => {
    const {data}=props

    const array=['add','request','accept','pay','send','received','return']

    const arrayReturn=(p)=>array.map((item,index)=>
    index <= array.indexOf(p)?
    <Grid sx={[Style.userPage.profile.cart.processAll]} key={index}>
      <Grid sx={[Style.userPage.profile.cart.processAll.processblue]} ></Grid>
      {p===item?<p style={Style.userPage.profile.cart.processAll.ptext}>{item}</p>:
      <p style={Style.userPage.profile.cart.processAll.ptextnone}>{item}</p>}
    </Grid>:
    <Grid sx={[Style.userPage.profile.cart.processAll]} key={index}>
      <Grid sx={[Style.userPage.profile.cart.processAll.process]} ></Grid>
      <p style={Style.userPage.profile.cart.processAll.ptextnone}>{item}</p>
    </Grid>
    )
    
    const dataReturn=data && data.map((item,index1)=>
      <Grid sx={Style.userPage.profile.cart.item}key={index1}>
        
        {item.books && item.books.map((item,index2)=>
          <h3 key={index2}>{item.name}</h3>
        )}

        <h4>{item.lender.username}</h4>
        <Grid container>
        {arrayReturn(item.process)}
        </Grid>
        
      </Grid>
    )

    const [requestData,setRequestdata]=useState()

    const findNewRequest=async ()=>{
      const result= await AuthenUserApi.viewRequestCart()
      setRequestdata(result.data)
    }

    useEffect(()=>{
      findNewRequest()
    },[requestData])

    const newcart=[]

    const agree=async (id)=>{
      await AuthenUserApi.UpdateProfileBorowedbooks([...newcart,id])
      await AuthenUserApi.updatecart(id,{process:"accept"})
    }
    
    const refuse=async(id)=>{
      await AuthenUserApi.UpdateProfileBorowedbooks(newcart.filter((item)=>item.id!=id))
      await AuthenUserApi.updatecart(id,{process:"refuse"})
    }

    const requestDataReturn=requestData && requestData.map((item,index)=>
    item.process=="request"?
    <Grid sx={Style.userPage.profile.cart.item} key={index}>
      <h4>bạn có một lời đề nghị từ <span>{item.borrower.username}</span> để mượn một số sách</h4>
      <button onClick={()=>agree(item._id)}>đồng ý</button>
      <button onClick={()=>refuse(item._id)}>từ chối</button>
    </Grid>:null)

  return (
    
    <Grid sx={Style.userPage.profile}>
      <Grid sx={Style.userPage.profile.cart}>
        <h2>Cart</h2>
        {requestDataReturn}
        {dataReturn}
      </Grid>
    </Grid>
  )
}
