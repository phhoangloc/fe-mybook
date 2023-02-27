
import React from 'react'
import { Grid } from '@mui/material'
import Style from '../asset/style'
import { useState } from 'react'
import store from '../redux/store'
import Theme from '../asset/theme'
export const UserContent = (props) => {

    const {i,data}=props

    const [mode,setNewMode]=useState(store.getState().mode)

    const update=()=>{
        store.subscribe(() => setNewMode(store.getState().mode))
      }
    
    update()

    const userbooks=data && data.books

    const returnbooks=userbooks && userbooks.map((item,index)=><h3 style={Style.userPage.userNarbar.h3}key={index}>{item.name}</h3>
    
    )

    return (
    <Grid sx={[mode!=="dark"?Theme.light:Theme.dark]}>
        {i==0?
        <Grid sx={[Style.userPage.userContent,mode!=="dark"?Theme.light.user.content:Theme.dark.user.content]}>
            <h2>{data && data.username}</h2>
        </Grid>:null}
        {i==1?
        <Grid sx={[Style.userPage.userContent,mode!=="dark"?Theme.light.user.content:Theme.dark.user.content]}>
            {returnbooks}
        </Grid>:null}
    </Grid>
    )
}
