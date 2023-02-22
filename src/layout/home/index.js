import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../example/header'
import { Narbar } from '../../example/narbar'
import { SwitchCustomHomeRoutes } from '../../asset/routes'
export const Home = () => {

  return (
    <Box>
        <Header/>
        <Narbar/>
          {SwitchCustomHomeRoutes}
    </Box>
  )
}
