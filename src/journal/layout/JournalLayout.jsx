import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components'

const drawerWidth = 250

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>

            <NavBar drawerWidth={drawerWidth}/>

            {/*Sidebar*/}
            <Box component="main"
                sx={{ flexGrow: 1, p:3 }}
            >
                {/* ToolBar */}

                {children}
            </Box>
        </Box>
    )
}
