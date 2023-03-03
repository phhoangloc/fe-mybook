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

export const Header = (props) => {
  const { loginSuccess } = props
  const avata = loginSuccess.data && loginSuccess.data.infor && loginSuccess.data.infor.avata
  const [mode,setNewMode]=useState(store.getState().mode)

  const updateData = () => {
    store.subscribe(() => setNewMode(store.getState().mode))
  }

  updateData()

  const changeMode=()=>{
    store.dispatch(setMode(mode !== "dark" ? "dark" : "light"))
    console.log(loginSuccess.data.infor.avata)
  }

  const narbarOpen=()=>{
    store.dispatch(setNarbar("100%"))
  }

  const [opacity,setOpacity]=useState("0")
  const [zindex,setZindex]=useState("-1")

  return (
    <Grid container direction="row" sx={[Style.header,mode!=="dark"?Theme.light:Theme.dark]}>
        <Grid><MenuIcon sx={Style.header.icon} onClick={()=>narbarOpen()}/></Grid>
        <Grid sx={Style.header.title}>
            <Link style={Style.a} to="/"><h1 style={Style.header.title.h1}>Lock and ...</h1></Link>
        </Grid>
        <Grid>{mode.mode!=="dark"?<LightModeIcon sx={Style.header.icon} onClick={()=>changeMode()}/>:<DarkModeIcon sx={Style.header.icon} onClick={()=>changeMode()}/>}</Grid>
        <Grid>
          {loginSuccess.success?
            <img src={`http://localhost:4000/img/avata/${avata}`} 
            onClick={()=>{
              setOpacity(opacity!=="1"?"1":"0")
              setZindex(zindex!=="5"?"5":"-1")
            }}
            />:
          <AccountCircleIcon 
          sx={Style.header.icon} 
          onClick={()=>{
            setOpacity(opacity!=="1"?"1":"0")
            setZindex(zindex!=="5"?"5":"-1")
          }}/>}
        </Grid>
          <AccountHeaderBox 
          style={{opacity:opacity,zIndex:zindex}} 
          onClick={()=>{setOpacity("0");setZindex("-1")}} 
          loginSuccess={loginSuccess} />
        <Grid><ShoppingCartIcon sx={Style.header.icon}/></Grid>
    </Grid>
  )
}
