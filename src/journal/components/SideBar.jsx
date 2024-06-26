import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
    component={"nav"}
    sx={{width: {sm:drawerWidth}, flexShrink: {sm:0}}}
    >
        <Drawer
        variant="permanent"
        open={true}
        sx={{
            display: {xs:'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
        }}
        >
        <Toolbar>
            <Typography variant="h6" noWrap component={'div'}>
                Milo
            </Typography>
        </Toolbar>
        <Divider/>

        <List>
            {
                ['Enero','Febrero','Marzo','Abril']
            }
        </List>
        </Drawer>
    </Box>
  )
}
