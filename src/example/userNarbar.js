
import React from 'react'
import { Grid } from '@mui/material'
import Style from '../asset/style'
import { useState } from 'react'
import store from '../redux/store'
import Theme from '../asset/theme'

export const UserNarbar = (props) => {

    const [mode,setNewMode]=useState(store.getState().mode)

    const update=()=>{
        store.subscribe(() => setNewMode(store.getState().mode))
      }
    
    update()

    const {i,onclickProfile,onclickBook}=props

    const hiddentitle={border:"2px solid whitesmoke",borderTop:"none",background:"lightgrey",color:"whitesmoke"}
  return (
    <Grid container sx={[Style.userPage.userNarbar]} >
        <Grid item sx={[
          Style.userPage.userNarbar.BoxIn,
          mode!=="dark"?Theme.light.user.narbar:Theme.dark.user.narbar,
          i!=0?hiddentitle:null]} >
          <p style={Style.userPage.userNarbar.ptext} onClick={onclickProfile}>Profile</p>
        </Grid>
        <Grid item sx={[
          Style.userPage.userNarbar.BoxIn,
          mode!=="dark"?Theme.light.user.narbar:Theme.dark.user.narbar,
          i!=1?hiddentitle:null]} >
          <p style={Style.userPage.userNarbar.ptext} onClick={onclickBook}>Book</p>
        </Grid>
    </Grid>
  )
}
