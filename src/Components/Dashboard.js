import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './DashBoard.scss'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SubjectOutlined } from '@mui/icons-material';
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';




const Dashboard = () => {
    const menuItems = [
        {
            text: 'All',
            icon: <SubjectOutlined color='primary' />,
            path: '/dashboard/all',
        },
        {
            text: 'Create',
            icon: <AddCircleOutlineOutlined color='primary' />,
            path: '/dashboard/create',
        },
    ];
    let navigate = useNavigate();
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
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            key={item.text}
                            button
                            onClick={navigate(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </>

    )

}

export default Dashboard