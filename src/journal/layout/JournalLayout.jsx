import { Box } from '@mui/material'
import React from 'react'
import { NavBar, SideBar } from '../components'

const drawerWidth = 250

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>

            <NavBar drawerWidth={drawerWidth}/>

            <SideBar drawerWidth={drawerWidth}/>
            <Box component="main"
                sx={{ flexGrow: 1, p:3 }}
            >
                {/* ToolBar */}

                {children}
            </Box>
        </Box>
    )
}
