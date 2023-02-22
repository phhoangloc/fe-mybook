import React from 'react'
import store from '../redux/store'
import { useState } from 'react'
import Theme from "../asset/theme"
import Style from "../asset/style"
import {Grid} from '@mui/material'
import cover from '../asset/img/cover.jpg'
export const Cover = () => {
    const [mode,setNewMode]=useState(store.getState().mode)

    const update=()=>{
        store.subscribe(() => setNewMode(store.getState().mode))
      }
    
    update()

  return (
    <Grid sx={[Style.cover,mode!=="dark"?Theme.light:Theme.dark]}>
      <img src={cover} style={Style.cover.img}/>
    </Grid>
  )
}
