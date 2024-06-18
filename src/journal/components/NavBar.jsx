import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = ({drawerWidth}) => {
  return (
    <AppBar position='fixed'
            sx={{
                width: {sm:`cal(100% - ${drawerWidth})`},
                ml: {sm: `${drawerWidth}px` }
            }}
    >
        <Toolbar>
            <IconButton
            color="inherit"
            edge= "start"
            sx={{mr:2, display: {sm:"none"}}}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction="row" justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant='h6' noWrap component={'div'}>JournalAPP</Typography>
            </Grid>
            <IconButton color="error">
                <LogoutOutlined/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
