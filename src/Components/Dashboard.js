import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './DashBoard.scss'




const Dashboard = () => {
    return (
        <>
            <AppBar position="fixed" sx={{
                width: 1,
                zIndex: 10000
            }}>
                <Toolbar>
                    <Typography variant="h5" component="div">
                        <Box sx={{
                            textAlign: 'center',
                            fontWeight: 'light'
                        }}>
                            Dashboard
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: 240,
                    '& .MuiDrawer-paper': {
                        marginTop: '64px',
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Typography variant='h5'>Notes</Typography>
            </Drawer>

        </>

    )

}

export default Dashboard