import { Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'

const LoginPage = () => {
    return (
        <div style={{ width: "100%", height: '100vh' }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4" style={{ fontFamily: "serif", fontWeight: 900, margin: "2rem" }}>CourseWise</Typography>
                <Button variant="h5" style={{ fontWeight: 700, margin: "2rem", width: "6rem", border: "1px solid black", borderRadius: "14px" }}>SIGN UP</Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h2" style={{ fontWeight: 900 }}>Hi there!</Typography>
                <Typography variant='h6'>Welcome to CourseWise User Dashboard</Typography>
                <Card style={{ width: "33%", display: "flex", flexDirection: "column", margin: "2rem", justifyContent: "center", alignItems: "center" }}>
                    <TextField style={{ width: "60%", marginTop: "1rem" }} id="outlined-email-input" label="Email" type="email" />
                    <TextField style={{ width: "60%", marginTop: "1rem" }} id="outlined-username-input" label="Username" type="email" />
                    <TextField style={{ width: "60%", marginTop: "1rem", marginBottom: "0" }} idid="outlined-password-input" label="Password" type="password" />
                    <Button variant="h5" style={{ fontWeight: 700, margin: "2rem", width: "6rem", border: "1px solid black", borderRadius: "14px" }}>Sign up </Button>
                    <span style={{ marginBottom: "2rem", fontWeight: 700 }}>Already have an account ?<Button style={{ color: 'blue' }}> Login</Button>
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage;
