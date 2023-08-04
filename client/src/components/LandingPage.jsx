import { Button, Grid, Hidden, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react';
import homeImage from '../images/homeImage.png'
import amazonLogo from '../images/amazon_logo.png';
import appleLogo from '../images/apple_logo.png';
import googleLogo from '../images/google_logo.png';
import spotifyLogo from '../images/spotify_logo.jpeg';
import slackLogo from '../images/Slack_logo.png';

const LandingPage = () => {
    const theme = useTheme();
    const mdSize = useMediaQuery(theme.breakpoints.up('md'))
    const smSize = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <div style={{ top: "63px", width: "100%", height: "100%", display: "flex", flexDirection: "column", left: "0px", overflowY: "scroll", overflowX: "hidden" }}>
            <div style={{ top: "63px", width: "100%", height: "700px", display: "flex" }}>
                <div style={{ width: mdSize ? "50%" : "100%", backgroundColor: "black", color: "white", display: "flex", flexDirection: "column", fontFamily: "serif" }}>
                    <h1 style={{ fontWeight: 900, width: "80%", fontSize: "xxx-large", marginTop: "160px", marginLeft: "55px", marginBottom: '15px' }}>Find your <span style={{ color: "#1fa95b" }}>perfect </span>course & grow your <span style={{ color: "#1fa95b" }}>skill.</span></h1>
                    <p style={{ color: "grey", marginLeft: "55px", marginRight: "10px" }}>Unlock Your Potential: Discover a World of Knowledge and Expertise on Our Cutting-Edge Course Selling App. Elevate Your Skills, Empower Your Journey - Start Learning Today!</p>
                    <Button
                        style={{
                            marginLeft: "50px",
                            width: "30%",
                            color: "white",
                            textTransform: 'none',
                            backgroundColor: "#fcb83b",
                            color: 'black',
                            fontWeight: '900',
                            boxShadow: "4px 4px 4px white"
                        }}>Get Started</Button>
                </div>
                <Hidden mdDown>
                    <div style={{ width: "50%", backgroundImage: `url(${homeImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                </Hidden>
            </div>
            <div style={{ width: "100%", height: "150px", backgroundColor: "white", top: "800px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ fontWeight: 900, fontFamily: "serif", fontSize: "xxx-large" }}>Our Sponsors</h1>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                    <img src={amazonLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                    <img src={appleLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                    <img src={googleLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                    <img src={spotifyLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                    <img src={slackLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                </div>
            </div>
            <hr style={{ backgroundColor: "grey", height: "6px", width: "100vw", margin: " 100px 0px 0px" }} />
            <div style={{ display: "flex", justifyContent: "center", margin: "20px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h4" style={{ fontWeight: 900, marginTop: "30px" }}>Achieve Your Goals With CourseWise</Typography>
                <Typography variant='h6' style={{ width: "80%", color: "#7d8c95" }}>Explore, Learn, Excel: Your Gateway to Skillful Success! Discover a vast array of courses tailored to elevate your expertise.</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: mdSize ? "row" : "column", justifyContent: "center", flexWrap: "nowrap", alignItems: "center" }}>
                <div style={{ width: mdSize ? "24%" : "80%", backgroundColor: "#b9f4dc", height: "15rem", marginRight: mdSize ? "2rem" : "3rem", marginLeft: mdSize && "3rem", boxShadow: "7px 7px 7px black", marginBottom: "3rem" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3 style={{ fontWeight: 900, marginLeft: "15px" }}>Learn latest skills</h3>
                        <p style={{ marginLeft: "15px", marginTop: "0px" }}>Stay Ahead with the Latest Skills: Embrace the Future of Learning on Our Cutting-Edge Course Platform. Discover the Hottest Skills in Demand.</p>
                    </div>
                </div>
                <div style={{ width: mdSize ? "24%" : "80%", backgroundColor: "#fef0ca", height: "15rem", marginRight: mdSize ? "2rem" : "3rem", boxShadow: " 7px 7px 7px black", marginBottom: "3rem" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h4 style={{ fontWeight: 900, marginLeft: "15px" }}>Get ready for a career</h4>
                        <p style={{ marginLeft: "15px", marginTop: "0px" }}>Prepare for Your Dream Career: Unlock Your Potential with Expert-Led Courses. Empower Yourself and Embrace the Path.</p>
                    </div>
                </div>
                <div style={{ width: mdSize ? "24%" : "80%", backgroundColor: "#cac0e5", height: "15rem", marginRight: mdSize ? "2rem" : "3rem", boxShadow: "7px 7px 7px black", marginBottom: "3rem" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h4 style={{ fontWeight: 900, marginLeft: "15px" }}>Earn a certificate</h4>
                        <p style={{ marginLeft: "15px", marginTop: "0px" }}>Certify Your Expertise: Earn Recognized Certificates with Our Skill-Enriching Courses. Take Your Career to New Horizons.</p>
                    </div>
                </div>

            </div>
            <hr style={{ color: "grey", height: "9px", width: "100vw", marginTop: "20px" }} />
            <div></div>
        </div>
    )
}

export default LandingPage
