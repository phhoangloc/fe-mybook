import { Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import store from '../redux/store'
import Style from '../asset/style'
import Theme from '../asset/theme'
import { margin } from '@mui/system'

export const News = () => {
    const [mode,setNewMode]=useState(store.getState().mode)

    const update=()=>{
        store.subscribe(() => setNewMode(store.getState().mode))
      }
    
    update()

    const data=[
        {
            date:"2023/02/18",
            title:"good morning",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            date:"2023/02/19",
            title:"good afternoon",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            date:"2023/02/20",
            title:"good evening",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]

    const returnData=data && data.map((item,index)=>
    <Grid key={index} container direction="row" sx={Style.news.titlesTop}>
        <Grid item xs={12} sm={3} sx={Style.news.titlesTop.date}>{item.date}</Grid>
        <Grid item xs={12} sm={9} sx={Style.news.titlesTop.title}>{item.title}</Grid>
    </Grid>)
  return (
    <Grid sx={[mode!=="dark"?Theme.light:Theme.dark]}>
        <Grid sx={Style.news}>
        <h1 style={{margin:"0 10px"}}>News</h1>
        {returnData}
        </Grid>
    </Grid>
  )
}
