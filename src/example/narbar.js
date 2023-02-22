import React from 'react'
import { Box,Grid } from '@mui/material'
import Style from '../asset/style'
import store from '../redux/store'
import Theme from '../asset/theme'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { setNarbar } from '../redux/reducer/narbarReducer'
import {Link } from 'react-router-dom'

export const Narbar = () => {
  const [mode,setNewMode]=useState(store.getState().mode)
  const [width,setWidth]=useState({width:store.getState().narbar})

  const update=()=>{
    store.subscribe(()=>setWidth({width:store.getState().narbar}))
    store.subscribe(() => setNewMode(store.getState().mode))
  }

  update()
  
  const narbarClose=()=>{
    store.dispatch(setNarbar("0%"))
    console.log(store.getState().narbar)
  }
  return (
    <Grid sx={[Style.narbar,mode!="dark"?Theme.light.boxIn:Theme.dark.boxIn,width]}>
        <CloseIcon sx={[Style.header.icon,{position:"absolute",right:"0",top:"0"}]} onClick={()=>narbarClose()}/>
        <Link style={{textDecoration:"none",color:"unset"}} to='/admin'><Box sx={Style.narbar.title}><h2 style={{"margin":"0"}}>Admin</h2></Box></Link>
    </Grid>
  )
}
