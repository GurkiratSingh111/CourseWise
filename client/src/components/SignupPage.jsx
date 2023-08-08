import { Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usernameInput = (e) => {
        setUsername(e.target.value);
    }
    const emailInput = (e) => {
        setEmail(e.target.value);
    }
    const passwordInput = (e) => {
        setPassword(e.target.value);
    }
    const submitData = async () => {
        const { data } = await axios.post('http://localhost:4000/api/v1/adminsignup', {
            name: username,
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        localStorage.removeItem("token");
        localStorage.setItem("token", data.admin.token);
    }

    const submitHandler = () => {
        submitData();
    }
    const navigate = useNavigate();
    return (
        <div style={{ width: "100%", height: '100vh' }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4" style={{ fontFamily: "serif", fontWeight: 900, margin: "2rem", cursor: "pointer" }} onClick={() => { navigate('/') }}>CourseWise</Typography>
                <Button variant="h5" onClick={() => { navigate('/login') }} style={{ fontWeight: 700, margin: "2rem", width: "6rem", border: "1px solid black", borderRadius: "14px" }}>Log In </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h2" style={{ fontWeight: 900 }}>Hi there!</Typography>
                <Typography variant='h6'>Welcome to CourseWise User Dashboard</Typography>
                <Card style={{ width: "33%", display: "flex", flexDirection: "column", margin: "2rem", justifyContent: "center", alignItems: "center" }}>
                    <TextField style={{ width: "60%", marginTop: "3rem" }} id="outlined-username-input" label="Username" type="text" onChange={usernameInput} />
                    <TextField style={{ width: "60%", marginTop: "1rem" }} id="outlined-email-input" label="Email" type="email" onChange={emailInput} />
                    <TextField style={{ width: "60%", marginTop: "1rem", marginBottom: "0" }} id="outlined-password-input" label="Password" type="password" onChange={passwordInput} />
                    <Button variant="h5" style={{ backgroundColor: "black", color: "white", fontWeight: 700, margin: "2rem", width: "6rem", border: "1px solid black", borderRadius: "14px" }} onClick={submitHandler}>Sign up </Button>
                    <span style={{ marginBottom: "2rem", fontWeight: 700, color: 'grey' }}>Already have an account ?<Button style={{ color: '#3b7ffc' }} onClick={() => { navigate('/login') }}> Login</Button>
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default SignupPage
