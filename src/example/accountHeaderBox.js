import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../asset/style'
import store from '../redux/store'
import { useState } from 'react'
import Theme from '../asset/theme'
export const AccountHeaderBox = (props) => {
  const {loginSuccess}=props
    const [mode,setNewMode]=useState(store.getState().mode)

    const updateData = () => {
      store.subscribe(() => setNewMode(store.getState().mode))
    }
  
    updateData()

    const logOut=()=>{
      localStorage.clear()
      window.location.href="/"
  }
  return (
    <Grid sx={[Style.header.list,props.style,mode!=="dark"?Theme.light.boxIn:Theme.dark.boxIn]}>

        {loginSuccess.success?
        <>
        <Link style={Style.a} to='/user' onClick={props.onClick}>
          <Grid sx={Style.header.list.text}><p style={{margin:"0"}}>Profile</p></Grid>
        </Link>
        <Grid sx={Style.header.list.text}><p style={{margin:"0"}} onClick={()=>logOut()}>Log Out</p></Grid>
        </>
        :<Link style={Style.a} to='/user/login' onClick={props.onClick}>
            <Grid sx={Style.header.list.text}><p style={{margin:"0"}}>Login</p></Grid>
        </Link>}
        
    </Grid>
  )
}
