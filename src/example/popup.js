import React from 'react'
import Style from '../asset/style'
import store from '../redux/store'
import { useState } from 'react'
import { Box } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export const PopUp = () => {

    const [dataPopUp,setDataPopUp]=useState(store.getState().popup)
    const update=()=>{
        store.subscribe(()=>setDataPopUp(store.getState().popup))
      }
    
    update()
    const stylePopUp=dataPopUp && dataPopUp.status==="close"?{height:"0px"}:{height:"50px"}
    const iconSuccess=dataPopUp && dataPopUp.success===true?<CheckCircleOutlineIcon style={{color:"green",fontSize:"30px",    margin: "-10px 10px"} }/>:null
    const iconFailed=dataPopUp && dataPopUp.success===false?<HighlightOffIcon style={{color:"red",fontSize:"30px",margin: "-10px 10px"}}/>:null
    const message=dataPopUp && dataPopUp.message

  return (
    <Box sx={[Style.popup,stylePopUp]}>
        <p style={Style.p}>{iconSuccess || iconFailed}{message}</p>
    </Box>
  )
}
