// import React from 'react'
// import { Box, AppBar, Typography, Button } from '@mui/material'
// const Header = () => {

//     return (
//         <Box sx={{ flexGrow: 1 }} >
//             <AppBar position='static' style={{ background: '#040738', height: "60px" }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <Typography variant="h5" sx={{ marginLeft: "15px", cursor: "pointer" }}
//                     >CoursePlex</Typography>
//                     <div style={{ display: "flex" }}>
//                         <Button variant="outlined"
//                             sx={{
//                                 margin: "10px",
//                                 marginRight: '20px',
//                                 color: 'white',
//                                 borderColor: "white",
//                                 ':hover': {
//                                     bgcolor: "#0a0f6b",
//                                     color: "white",
//                                     borderColor: "white"
//                                 }
//                             }}
//                         >Register</Button>
//                         <Button
//                             variant="outlined"
//                             sx={{
//                                 margin: "10px",
//                                 marginRight: '20px',
//                                 color: 'white',
//                                 borderColor: "white",
//                                 ':hover': {
//                                     bgcolor: "#0a0f6b",
//                                     color: "white",
//                                     borderColor: "white"
//                                 }
//                             }}
//                         >Login</Button>
//                     </div>
//                 </div>
//             </AppBar>
//         </Box>
//     )
// }

// export default Header

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Hidden } from "@mui/material";

const drawerWidth = 240;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar style={{ background: "#040738" }} />
            <Divider />
            <List >
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Hidden smUp>
                <Button style={{
                    marginLeft: "10px",
                    marginTop: "20px",
                    marginRight: "15px",
                    color: "#4c4c52"

                }}>Register</Button>
                <Button style={{
                    marginTop: "20px",
                    marginRight: "15px",
                    color: "#4c4c52"

                }}>Login</Button>
            </Hidden>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", flexGrow: 1 }}>
            <CssBaseline />
            <AppBar
                style={{ background: "#040738" }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" style={{ textAlign: "start" }}>
                        Coursera
                    </Typography>
                    <div>
                        <Hidden smDown>
                            <Button
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    margin: "10px",
                                    marginRight: '20px',
                                    color: 'white',
                                    borderColor: "white",
                                    ':hover': {
                                        bgcolor: "#0a0f6b",
                                        color: "white",
                                        borderColor: "white"
                                    }
                                }}

                            >
                                Register
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    margin: "10px",
                                    marginRight: '20px',
                                    color: 'white',
                                    borderColor: "white",
                                    ':hover': {
                                        bgcolor: "#0a0f6b",
                                        color: "white",
                                        borderColor: "white"
                                    }
                                }}
                            >
                                Login
                            </Button>
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
            <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box >
    );
}

export default Header;