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

  const getUserLoginFromToken= async()=>{
    const result= await AuthenUserApi.GetUserAuthen()
    setUserData(result.data[0])
  }

  useEffect(()=>{
    getUserLoginFromToken()
  },[userData])

  const [mode,setNewMode]=useState(store.getState().mode)

  const update=()=>{
      store.subscribe(() => setNewMode(store.getState().mode))
    }
  
  update()
  const [i,seti]=useState(0)
  
  return (
    <Grid sx={[Style.userPage,mode!=="dark"?Theme.light:Theme.dark]}>
      <Grid sx={[Style.userPage.BoxIn,mode!=="dark"?Theme.light.boxIn:Theme.dark.boxIn]}>
        <UserNarbar 
          i={i}
          onclickProfile={()=>seti(0)}
          onclickBook={()=>seti(1)}/>
        <UserContent data={userData} i={i}/>
      </Grid>
    </Grid>
  )
}
