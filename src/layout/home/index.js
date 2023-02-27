import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../../example/header'
import { Narbar } from '../../example/narbar'
import { SwitchCustomHomeRoutes } from '../../asset/routes'
import { PopUp } from '../../example/popup'
import AuthenUserApi from '../../api/authenUser'

export const Home = () => {

  const [loginSuccess,setLoginSuccess]=useState(false)

  const getUserLoginFromToken= async()=>{
    const result= await AuthenUserApi.UserLogin()
    setLoginSuccess(result.success)
  }

  useEffect(()=>{
    getUserLoginFromToken()
  },[])

  return (
    <Box>
        <Header loginSuccess={loginSuccess}/>
        <PopUp/>
        <Narbar/>
          {SwitchCustomHomeRoutes}
    </Box>
  )
}
