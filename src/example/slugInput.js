import React from 'react'
import Style from '../asset/style'
import { Box } from '@mui/material'
import store from '../redux/store'
import { useState } from 'react'
import { setSlugInput } from '../redux/reducer/slugInputReducer'
export const SlugInput = () => {
  const [slugInputHeight, setSlugInputHeight] = useState(store.getState().slugInput)
  
  const update=()=>{
      store.subscribe(()=>setSlugInputHeight(store.getState().slugInput))
    }
  
  update()

  const [slug, setSlug]=useState()
  return (
    <Box sx={[Style.popup,{height:slugInputHeight}]}>
      <p style={Style.p}>link:localhost:3000/book/<input placeholder='slug' onChange={(e)=>setSlug(e.target.value)}/></p>
      <button onClick={()=>{window.location.href=`/book/${slug}`}}>ok</button>
      <button onClick={() =>(store.dispatch(setSlugInput("0px")))}>cancel</button>
    </Box>
  )
}