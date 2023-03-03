import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Grid,Box} from '@mui/material'
import store from '../redux/store'
import Theme from '../asset/theme'
import Style from '../asset/style'
export const Book = (props) => {
    const [mode,setNewMode]=useState(store.getState().mode)

    const update=()=>{
        store.subscribe(() => setNewMode(store.getState().mode))
      }
    
    update()

    const data = props.data
    
    const returnData=data.length? 
      data.map((item, index) =>
        
          <Grid item  xs={6} sm={4} md={3} sx={[Style.book.box]}>
            <Box>
              <Link to={'/book/'+item.slug} key={index}><img src={'http://localhost:4000/img/bookcover/'+item.img} style={Style.book.box.imgbox.img}/></Link>
            </Box>
            <h4 style={Style.book.box.title}>{item.name}</h4>
          </Grid>
    ):null

  return (
    <Grid sx={[mode!=="dark"?Theme.light:Theme.dark]}>
        {data.length?<h1 style={{"margin":"auto",maxWidth:"1200px",padding:"0 5%"}}>{props.title}</h1>:null}
        <Grid container direction="row" sx={Style.book}>
            {returnData}
        </Grid>
    </Grid>
  )
}
