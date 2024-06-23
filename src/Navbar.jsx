import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Navbar = () => {
  const [value,setValue]=useState(0);
  return (
    <>
    
    <AppBar>
     <Toolbar>
     <Typography variant='h4'>LOGO </Typography>
     <Tabs sx={{marginLeft:"auto"}} textColor='inherit'
      indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)} >
      <Tab label="Home" />
      <Tab label="About" />
      <Tab label="Contact" />
      <Tab label="SignIn" />
      </Tabs>    
     </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar