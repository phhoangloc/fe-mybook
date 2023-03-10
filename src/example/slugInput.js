import React from 'react'
import Style from '../asset/style'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import store from '../redux/store'
import { useState } from 'react'
import { setSlugInput } from '../redux/reducer/slugInputReducer'
import { setEdit } from '../redux/reducer/editReducer'
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
      <Link to ={`/book/${slug}`}><button onClick={()=>(store.dispatch(setSlugInput("0px")))}>ok</button></Link>
      <button onClick={() =>{store.dispatch(setSlugInput("0px"));store.dispatch(setEdit(false))}}>cancel</button>
    </Box>
  )
}
