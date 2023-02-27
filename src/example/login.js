import React from 'react'
import { useState } from 'react'
import store from '../redux/store'
import Theme from '../asset/theme'
import { Grid } from '@mui/material'
import Style from '../asset/style'
import { Box } from '@mui/system'
import UserApi from '../api/user'
import { setPopUp } from '../redux/reducer/popUpReducer'
import { Link } from 'react-router-dom'
export const Login = () => {
    const [mode,setNewMode]=useState(store.getState().mode)

    const update=()=>{
        store.subscribe(() => setNewMode(store.getState().mode))
      }
    
    update()
    
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const body={username,password}

    const LoginFuntion=async()=>{
      const result= await UserApi.Login(body)
      if(result.success){
        localStorage.setItem('token', "Bearer " + result.data.token)
        store.dispatch(setPopUp({status:"open", success: result.success, message:result.message}))
        setTimeout(() => {
          store.dispatch(setPopUp({ status:"close", msg: "" }))
          window.location.href="/"
      }, 2000)
      }else{
        store.dispatch(setPopUp({status:"open", success: result.success, message:result.message}))
        setTimeout(() => {
          store.dispatch(setPopUp({ status:"close", msg: "" }))
      }, 2000)
      }
    }

    return (
    <Grid sx={[Style.user,mode!=="dark"?Theme.light:Theme.dark]}>
        <Grid sx={[Style.user.BoxIn]}>
          <Box sx={[Style.user.BoxDetail]}>
            <h1 style={Style.user.h1}>Login</h1>
            <input placeholder='username' type="text" onChange={(e)=>setUsername(e.target.value)}></input>
            <input placeholder='password' type="password" onChange={(e)=>setPassword(e.target.value)}></input>
            {username!==undefined && password !==undefined && username!=="" && password !==""?<button style={Style.user.button} onClick={()=>LoginFuntion()}>Log In</button>:null}
            <Link to="/user/ca" style={Style.a}>
              <p style={Style.user.ptext}>Create Account</p>
            </Link>
            <p style={Style.user.ptext}>Forget Password ?</p>
          </Box>
        </Grid>
    </Grid>
  )
}
