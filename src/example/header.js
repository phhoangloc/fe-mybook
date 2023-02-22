import React, { useState } from 'react'
import {Grid} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Style from '../asset/style';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Theme from '../asset/theme';
import store from '../redux/store';
import { setMode } from '../redux/reducer/modeReducer';
import { setNarbar } from '../redux/reducer/narbarReducer';
import { Link } from 'react-router-dom';
import {AccountHeaderBox} from '../example/accountHeaderBox'

export const Header = () => {
  const [mode,setNewMode]=useState(store.getState().mode)

  const updateData = () => {
    store.subscribe(() => setNewMode(store.getState().mode))
  }

  updateData()

  const changeMode=()=>{
    store.dispatch(setMode(mode!=="dark"?"dark":"light"))
  }

  const narbarOpen=()=>{
    store.dispatch(setNarbar("100%"))
  }

  const [opacity,setOpacity]=useState("0")

  return (
    <Grid container direction="row" sx={[Style.header,mode!=="dark"?Theme.light:Theme.dark]}>
        <Grid><MenuIcon sx={Style.header.icon} onClick={()=>narbarOpen()}/></Grid>
        <Grid sx={Style.header.title}>
            <Link style={Style.a} to="/"><h1 style={Style.header.title.h1}>Name Page</h1></Link>
        </Grid>
        <Grid>{mode.mode!=="dark"?<LightModeIcon sx={Style.header.icon} onClick={()=>changeMode()}/>:<DarkModeIcon sx={Style.header.icon} onClick={()=>changeMode()}/>}</Grid>
        <Grid><AccountCircleIcon sx={Style.header.icon} onClick={()=>setOpacity(opacity!=1?"1":"0")}/></Grid>
        <AccountHeaderBox style={{opacity:opacity}} onClick={()=>setOpacity("0")}/>
        <Grid><ShoppingCartIcon sx={Style.header.icon}/></Grid>
    </Grid>
  )
}
