import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../asset/style'
import store from '../redux/store'
import { useState } from 'react'
import Theme from '../asset/theme'
export const AccountHeaderBox = (props) => {
    const [mode,setNewMode]=useState(store.getState().mode)

    const updateData = () => {
      store.subscribe(() => setNewMode(store.getState().mode))
    }
  
    updateData()
  return (
    <Grid sx={[Style.header.list,props.style,mode!=="dark"?Theme.light:Theme.dark]}>
        <Link style={Style.a} to='/user/login' onClick={props.onClick}>
            <Grid sx={Style.header.list.text}><p style={{margin:"0"}}>Login</p></Grid>
        </Link>
    </Grid>
  )
}
