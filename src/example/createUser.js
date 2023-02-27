import React from 'react'
import Style from '../asset/style'
import { useState } from 'react'
import { Grid,Box } from '@mui/material'
import Theme from '../asset/theme'
import store from '../redux/store'
import { Link } from 'react-router-dom'
import UserApi from '../api/user'
import { setPopUp } from '../redux/reducer/popUpReducer'

export const CreateUser = () => {
    const [mode,setNewMode]=useState(store.getState().mode)

    const update=()=>{
        store.subscribe(() => setNewMode(store.getState().mode))
      }
    
    update()

    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [email,setEmail]=useState()
    const body={
        username,password,email
    }
    const CreateAccountFuntion =async()=>{
        const result= await UserApi.CreateUser(body)
        console.log(result)
        if(result.success){
            store.dispatch(setPopUp({status:"open", success: result.success, message:result.msg}))
            setTimeout(() => {
              store.dispatch(setPopUp({ status:"close", msg: "" }))
              window.location.href="/user/login"
          }, 5000)
        }else{
            store.dispatch(setPopUp({status:"open", success: result.success, message:result.msg}))
        }
    }

    return (
        <Grid sx={[Style.user,mode!=="dark"?Theme.light:Theme.dark]}>
            <Grid sx={[Style.user.BoxIn]}>
                <Box sx={[Style.user.BoxDetail]}>
                    <h1 style={Style.user.h1}>New User</h1>
                    <input placeholder='username' type="text" onChange={(e)=>setUsername(e.target.value)}></input>
                    <input placeholder='password' type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                    <input placeholder='email' type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                    <button style={Style.user.button} onClick={()=>CreateAccountFuntion()}>Create</button>
                    <Link to="/user/login" style={Style.a}><p style={Style.user.ptext}>Log In</p></Link>
                    <p style={Style.user.ptext}>Forget Password ?</p>
                </Box>
            </Grid>
        </Grid>
    )
}
