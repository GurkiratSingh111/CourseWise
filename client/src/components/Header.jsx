import { AppBar, Box, Button, CssBaseline, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from 'react-router-dom';
const drawerItems = ['Home', 'Courses', 'About', 'Contact', 'Register/Log In ', 'Teach on CourseWise']
const Header = () => {
    const navigate = useNavigate();
    const [showDrawer, setShowDrawer] = React.useState(false);
    const handleDrawerToggle = () => {
        setShowDrawer((prevState) => !prevState);
    }
    const drawer = (
        <Box>
            <List >
                {drawerItems.map((item) => {
                    return <ListItem key={item}>
                        <ListItemButton onClick={handleDrawerToggle} sx={{
                            transition: 'all 0.5s ease-in-out',

                            '&:hover': {
                                backgroundColor: '#22282a',
                                color: "white"
                            }
                        }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                })}
            </List>
        </Box>
    );

    return (
        <Box>
            <CssBaseline />
            <AppBar component="nav"
                style={{ background: '#22282a', position: "fixed", fontFamily: "serif" }}>
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h5" display="block" onClick={() => { navigate('/') }} style={{ fontWeight: 900, fontFamily: "serif", cursor: "pointer" }}>
                        CourseWise
                    </Typography>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            style={{ position: "fixed", right: "20px" }}
                            onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <div>
                        <Hidden mdDown>
                            <Button style={{ color: "white", fontWeight: 700, margin: '8px' }} sx={{
                                "&:before": {
                                    content: "''",
                                    position: 'absolute',
                                    width: '0',
                                    height: '2px',
                                    bottom: '-1px',
                                    left: '50%',
                                    transform: 'translate(-50%,0%)',
                                    backgroundColor: 'white',
                                    visibility: 'hidden',
                                    transition: 'all 0.3s ease-in-out'
                                },
                                '&:hover:before': {
                                    visibility: 'visible',
                                    width: '100%'
                                }
                            }}
                                onClick={() => { navigate('/') }}
                            >Home</Button>
                            <Button style={{ color: "white", fontWeight: 700, margin: '8px' }} sx={{
                                "&:before": {
                                    content: "''",
                                    position: 'absolute',
                                    width: '0',
                                    height: '2px',
                                    bottom: '-1px',
                                    left: '50%',
                                    transform: 'translate(-50%,0%)',
                                    backgroundColor: 'white',
                                    visibility: 'hidden',
                                    transition: 'all 0.3s ease-in-out'
                                },
                                '&:hover:before': {
                                    visibility: 'visible',
                                    width: '100%'

                                }
                            }}
                                onClick={() => { navigate('/allcourses') }}
                            >Courses</Button>
                            <Button style={{ color: "white", fontWeight: 700, margin: '8px' }} sx={{
                                "&:before": {
                                    content: "''",
                                    position: 'absolute',
                                    width: '0',
                                    height: '2px',
                                    bottom: '-1px',
                                    left: '50%',
                                    transform: 'translate(-50%,0%)',
                                    backgroundColor: 'white',
                                    visibility: 'hidden',
                                    transition: 'all 0.3s ease-in-out'
                                },
                                '&:hover:before': {
                                    visibility: 'visible',
                                    width: '100%'

                                }
                            }}>Contact</Button>
                            <Button style={{ color: "white", fontWeight: 700, margin: '8px' }} sx={{
                                "&:before": {
                                    content: "''",
                                    position: 'absolute',
                                    width: '0',
                                    height: '2px',
                                    bottom: '-1px',
                                    left: '50%',
                                    transform: 'translate(-50%,0%)',
                                    backgroundColor: 'white',
                                    visibility: 'hidden',
                                    transition: 'all 0.3s ease-in-out'
                                },
                                '&:hover:before': {
                                    visibility: 'visible',
                                    width: '100%'
                                }
                            }}
                            ><a href="/#about" onClick={() => { navigate('/') }} style={{ color: "white", textDecoration: 'none' }}>About</a></Button>
                        </Hidden>
                    </div>
                    <div>
                        <Hidden mdDown>
                            <Button style={{
                                color: "white",
                                textTransform: 'none',
                                fontWeight: '800',
                                marginRight: "8px",
                            }}
                                sx={{
                                    "&:before": {
                                        content: "''",
                                        position: 'absolute',
                                        width: '0',
                                        height: '2px',
                                        bottom: '-1px',
                                        left: '50%',
                                        transform: 'translate(-50%,0%)',
                                        backgroundColor: 'white',
                                        visibility: 'hidden',
                                        transition: 'all 0.3s ease-in-out'
                                    },
                                    '&:hover:before': {
                                        visibility: 'visible',
                                        width: '100%'
                                    }
                                }}
                                onClick={() => { navigate('/login') }}>Log In</Button>
                            <Button
                                style={{
                                    color: "white",
                                    textTransform: 'none',
                                    backgroundColor: "#fcb83b",
                                    color: 'black',
                                    fontWeight: '800',
                                    boxShadow: "4px 4px 4px white"
                                }}
                                onClick={() => { navigate('/adminlogin') }}>Teach on CourseWise</Button>
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer variant='temporary' open={showDrawer} onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: "none" },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, height: 400 },
                    }}>{drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

export default Header
