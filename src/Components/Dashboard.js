import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './DashBoard.scss'




const Dashboard = () => {
    return (
        <Box>
            <Box>
                <AppBar position="static" sx={{ width: 1 }}>
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
            </Box>

            <Box>
                <Drawer
                    sx={{
                        width: 240,

                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Typography variant='h5'>Notes</Typography>
                </Drawer>
            </Box>

        </Box>

    )
    // return (<div >
    //     <AppBar title='Dashboard' position='static' color='black' sx={{
    //         maxwidth: 500,
    //         height: 200,
    //     }}>
    //     </AppBar>
    //     <Drawer variant='permanent' anchor='left' sx={{
    //         maxwidth: 300,
    //         maxHeight: 1,
    //     }}>
    //         <Typography variant='h5'>
    //             Notes
    //         </Typography>
    //     </Drawer>
    // </div>

    //) this is the original code from scratch, will be removed.
}

export default Dashboard