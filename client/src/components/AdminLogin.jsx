import { Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate();
    return (
        <div style={{ width: "100%", height: '100vh' }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4" style={{ fontFamily: "serif", fontWeight: 900, margin: "2rem", cursor: "pointer" }} onClick={() => { navigate('/') }}>CourseWise</Typography>
                <Button variant="h5" onClick={() => { navigate('/adminsignup') }} style={{ fontWeight: 700, margin: "2rem", width: "6rem", border: "1px solid black", borderRadius: "14px" }}>SIGN UP</Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h2" style={{ fontWeight: 900 }}>Welcome back!</Typography>
                <Typography variant='h6'>Welcome to CourseWise Instructor Dashboard</Typography>
                <Card style={{ width: "33%", display: "flex", flexDirection: "column", margin: "2rem", justifyContent: "center", alignItems: "center" }}>
                    <TextField style={{ width: "60%", marginTop: "3rem" }} id="outlined-email-input" label="Email" type="email" />
                    <TextField style={{ width: "60%", marginTop: "1rem", marginBottom: "0" }} idid="outlined-password-input" label="Password" type="password" />
                    <Button variant="h5" style={{ backgroundColor: "black", color: "white", fontWeight: 700, margin: "2rem", width: "6rem", border: "1px solid black", borderRadius: "14px" }}>LOG IN </Button>
                    <span style={{ marginBottom: "2rem", color: "grey", fontWeight: 700 }}>Don't have an account ?<Button onClick={() => { navigate('/adminsignup') }} style={{ color: '#3b7ffc', fontWeight: 600 }}> Sign up for free</Button>
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default AdminLogin;
