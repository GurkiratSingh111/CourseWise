import React from 'react'
import { Box, AppBar, Typography, Button } from '@mui/material'
const Header = () => {

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position='static' style={{ background: '#040738', height: "60px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h5" sx={{ marginLeft: "15px", cursor: "pointer" }}
                    >CoursePlex</Typography>
                    <div style={{ display: "flex" }}>
                        <Button variant="outlined"
                            sx={{
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
                        >Register</Button>
                        <Button
                            variant="outlined"
                            sx={{
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
                        >Login</Button>
                    </div>
                </div>
            </AppBar>
        </Box>
    )
}

export default Header
