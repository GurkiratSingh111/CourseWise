import { AppBar, Box, Button, CssBaseline, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userEmailState } from '../store/selector/userEmail';
import { userNameState } from '../store/selector/userName';
import { userState } from '../store/atoms/user';
const drawerItems = ['Home', 'Courses', 'Register', 'Login', 'Teach on CourseWise']
const Header = () => {
    const setUser = useSetRecoilState(userState);
    const userName = useRecoilValue(userNameState);
    console.log("The email is", userName);
    const navigate = useNavigate();
    const [showDrawer, setShowDrawer] = React.useState(false);
    const logOutUser = () => {
        localStorage.removeItem("token");
        setUser({
            userName: null,
            userEmail: null
        })
    }
    const handleDrawerToggle = (item) => {
        if (item === 'Home') {
            navigate('/');
        }
        else if (item === 'Courses') {
            navigate('/allcourses');
        }
        else if (item === 'Register') {
            navigate('/signup');
        }
        else if (item === 'Login') {
            navigate('/login')
        }
        else if (item === 'Teach on CourseWise') {
            navigate("/adminsignup");
        }

        setShowDrawer((prevState) => !prevState);
    }
    const drawer = (
        <Box>
            <List >
                {drawerItems.map((item) => {
                    console.log(item)
                    return <ListItem key={item}>
                        <ListItemButton onClick={() => { handleDrawerToggle(item) }} sx={{
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
                        <a href="/#home" onClick={() => { navigate('/') }} style={{ color: "white", textDecoration: 'none' }}>CourseWise</a>
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

                            ><a href="/#home" onClick={() => { navigate('/') }} style={{ color: "white", textDecoration: 'none' }}>Home</a></Button>
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
                            }}
                            ><a href="/#about" onClick={() => { navigate('/') }} style={{ color: "white", textDecoration: 'none' }}>About</a></Button>
                        </Hidden>
                    </div>
                    <div>
                        {userName ? <span>
                            <span style={{ fontWeight: 800 }}>Welcome, {userName}</span>
                            <Button
                                style={{
                                    color: "white",
                                    textTransform: 'none',
                                    backgroundColor: "#fcb83b",
                                    color: 'black',
                                    fontWeight: '800',
                                    boxShadow: "4px 4px 4px white",
                                    marginLeft: "2rem"
                                }}
                                onClick={logOutUser}>Log Out</Button>
                        </span> :
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
                        }

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
