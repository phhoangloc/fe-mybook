
import React from 'react'
import { Grid } from '@mui/material'
import Style from '../asset/style'

export const UserNarbar = (props) => {

    const {i,onclickProfile,onclickBook}=props

    const selecttitle={borderBottom: "1px solid"}
  return (
    <Grid container sx={[Style.userPage.narbar]}>
      <Grid sx={[
        Style.userPage.narbar.title,
        i === 1 ? selecttitle
          : null
      ]}>
          <p  onClick={onclickProfile} style={Style.userPage.narbar.title.ptext}>Profile</p>
        </Grid>
      <Grid sx={[
        Style.userPage.narbar.title,
        i === 2 ? selecttitle
          : null
      ]}>
          <p onClick={onclickBook} style={Style.userPage.narbar.title.ptext}>Book</p>
        </Grid>
    </Grid>
  )
}
