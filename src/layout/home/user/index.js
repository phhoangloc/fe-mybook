import React from 'react'
import { UserNarbar } from '../../../example/userNarbar'
import { UserContent } from '../../../example/userContent'
import { Grid } from '@mui/material'
import AuthenUserApi from '../../../api/authenUser'
import { useState,useEffect } from 'react'
import Style from '../../../asset/style'
import store from '../../../redux/store'
import Theme from '../../../asset/theme'

export const User = () => {
  const [userData,setUserData]=useState()
  const [i,seti]=useState(1)

  const getUserLoginFromToken= async()=>{
    const result= await AuthenUserApi.GetUserAuthen()
    if(result.success){
    setUserData(result.data)
    }else{
      seti(0)
    }
  }

  useEffect(()=>{
    getUserLoginFromToken()
  },[userData])

  const [mode,setNewMode]=useState(store.getState().mode)

  const update=()=>{
      store.subscribe(() => setNewMode(store.getState().mode))
    }
  
  update()
  return (
    <Grid sx={[Style.userPage,mode!=="dark"?Theme.light:Theme.dark]}>
      <Grid sx={[Style.userPage.BoxIn,mode!=="dark"?Theme.light.boxIn:Theme.dark.boxIn]}>
        {i!=0?
          <UserNarbar 
          i={i}
          onclickProfile={()=>seti(1)}
          onclickBook={()=>seti(2)}/>:null}
        <UserContent data={userData} i={i}/>
      </Grid>
    </Grid>
  )
}
