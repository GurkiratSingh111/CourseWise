// // import React from 'react'
// // import { Box, AppBar, Typography, Button } from '@mui/material'
// // const Header = () => {

// //     return (
// //         <Box sx={{ flexGrow: 1 }} >
// //             <AppBar position='static' style={{ background: '#040738', height: "60px" }}>
// //                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                     <Typography variant="h5" sx={{ marginLeft: "15px", cursor: "pointer" }}
// //                     >CoursePlex</Typography>
// //                     <div style={{ display: "flex" }}>
// //                         <Button variant="outlined"
// //                             sx={{
// //                                 margin: "10px",
// //                                 marginRight: '20px',
// //                                 color: 'white',
// //                                 borderColor: "white",
// //                                 ':hover': {
// //                                     bgcolor: "#0a0f6b",
// //                                     color: "white",
// //                                     borderColor: "white"
// //                                 }
// //                             }}
// //                         >Register</Button>
// //                         <Button
// //                             variant="outlined"
// //                             sx={{
// //                                 margin: "10px",
// //                                 marginRight: '20px',
// //                                 color: 'white',
// //                                 borderColor: "white",
// //                                 ':hover': {
// //                                     bgcolor: "#0a0f6b",
// //                                     color: "white",
// //                                     borderColor: "white"
// //                                 }
// //                             }}
// //                         >Login</Button>
// //                     </div>
// //                 </div>
// //             </AppBar>
// //         </Box>
// //     )
// // }

// // export default Header

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Hidden } from "@mui/material";
// import { Outlet } from "react-router-dom";

// const drawerWidth = 240;

// function Header(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     const drawer = (
//         <div>
//             <Toolbar style={{ background: "#040738" }} />
//             <Divider />
//             <List >
//                 {["All Courses", "My Courses", "WishList"].map((text, index) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//             <Hidden smUp>
//                 <Button style={{
//                     marginLeft: "10px",
//                     marginTop: "20px",
//                     marginRight: "15px",
//                     color: "#4c4c52"

//                 }}>Register</Button>
//                 <Button style={{
//                     marginTop: "20px",
//                     marginRight: "15px",
//                     color: "#4c4c52"

//                 }}>Login</Button>
//                 <Button style={{
//                     marginTop: "20px",
//                     marginRight: "15px",
//                     color: "#4c4c52"

//                 }}>Teach on LearnUp</Button>
//             </Hidden>
//         </div>
//     );

//     const container =
//         window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: "flex", flexGrow: 1 }}>
//             <CssBaseline />
//             <AppBar
//                 style={{ background: "#040738" }}
//                 position="fixed"
//                 sx={{
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                     ml: { sm: `${drawerWidth}px` }
//                 }}
//             >
//                 <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: "none" } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h5" style={{ textAlign: "start", cursor: "pointer" }}>
//                         LearnUp
//                     </Typography>
//                     <div>
//                         <Hidden smDown>
//                             <Button
//                                 variant="outlined"
//                                 sx={{
//                                     bgcolor: "white",
//                                     mr: 2,
//                                     margin: "10px",
//                                     marginRight: '20px',
//                                     color: '#0a0f6b',
//                                     borderColor: "white",
//                                     ':hover': {
//                                         bgcolor: "#0a0f6b",
//                                         color: "white",
//                                         borderColor: "white"
//                                     }
//                                 }}
//                             >
//                                 Teach on Coursera
//                             </Button>
//                             <Button
//                                 variant="outlined"
//                                 sx={{
//                                     mr: 2,
//                                     margin: "10px",
//                                     marginRight: '20px',
//                                     color: 'white',
//                                     borderColor: "white",
//                                     ':hover': {
//                                         bgcolor: "#0a0f6b",
//                                         color: "white",
//                                         borderColor: "white"
//                                     }
//                                 }}
//                             >
//                                 Register
//                             </Button>
//                             <Button
//                                 variant="outlined"
//                                 sx={{
//                                     mr: 2,
//                                     margin: "10px",
//                                     marginRight: '20px',
//                                     color: 'white',
//                                     borderColor: "white",
//                                     ':hover': {
//                                         bgcolor: "#0a0f6b",
//                                         color: "white",
//                                         borderColor: "white"
//                                     }
//                                 }}
//                             >
//                                 Login
//                             </Button>
//                         </Hidden>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//             <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true
//                     }}
//                     sx={{
//                         display: { xs: "block", sm: "none" },
//                         "& .MuiDrawer-paper": {
//                             boxSizing: "border-box",
//                             width: drawerWidth
//                         }
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         display: { xs: "none", sm: "block" },
//                         "& .MuiDrawer-paper": {
//                             boxSizing: "border-box",
//                             width: drawerWidth
//                         }
//                     }}
//                     open
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>
//             <Box component="main"
//                 sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
//                 <Toolbar />
//                 <Outlet />
//             </Box>
//         </Box>
//     );
// }

// export default Header;



// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

// function Header(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen((prevState) => !prevState);
//     };

//     const drawer = (
//         <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//             <List>
//                 {navItems.map((item) => (
//                     <ListItem key={item} disablePadding>
//                         <ListItemButton sx={{ textAlign: 'center' }}>
//                             <ListItemText primary={item} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar component="nav" style={{ background: "#191919" }} >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: 'none' } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography
//                         variant="h6"
//                         component="div"
//                         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: "white", fontWeight: 900 } }}
//                     >
//                         SkillShare
//                     </Typography>
//                     <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//                         {navItems.map((item) => (
//                             <Button key={item} sx={{ color: '#fff' }}>
//                                 {item}
//                             </Button>
//                         ))}
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             <Box component="nav">
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true, // Better open performance on mobile.
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>
//         </Box>
//     );
// }



// export default Header;


import { AppBar, Box, Button, CssBaseline, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from 'react-router-dom';
const drawerItems = ['Home', 'Courses', 'About', 'Contact', 'Register/Log In ', 'Teach on CourseWise']
const Header = () => {
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
                    <Typography variant="h5" display="block" style={{ fontWeight: 900, fontFamily: "serif", cursor: "pointer" }}>
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
                            }}>Home</Button>
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
                            }}>Courses</Button>
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
                            }}>About</Button>
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
                                }}>Log In</Button>
                            <Button
                                style={{
                                    color: "white",
                                    textTransform: 'none',
                                    backgroundColor: "#fcb83b",
                                    color: 'black',
                                    fontWeight: '800',
                                    boxShadow: "4px 4px 4px white"
                                }}>Teach on CourseWise</Button>
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
        </Box >
    )
}

export default Header
