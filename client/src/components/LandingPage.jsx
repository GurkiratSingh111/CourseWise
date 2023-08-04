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
        // <div style={{ overflowX: "hidden", display: "flex", flexWrap: "wrap", backgroundImage: `url(${landingImage})`, height: "100vh", width: "80vw", backgroundRepeat: "no-repeat", }}>
        //     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        //         <div style={{ position: "fixed", right: "20px", top: "100px" }}>
        //             <Typography variant='h4' style={{ color: "#0a0f6b" }}>Find your <span style={{ color: "#eb83a9" }}>perfect</span> course <br />& grow your <span style={{ color: "#eb83a9" }}>skills</span> </Typography>
        //             <br />
        //             <Button
        //                 variant="outlined"
        //                 sx={{
        //                     bgcolor: "#0a0f6b",
        //                     position: "fixed",
        //                     right: "200px",
        //                     mr: 2,
        //                     color: 'white',
        //                     borderColor: "white",
        //                     ':hover': {
        //                         bgcolor: "#0a0f6b",
        //                         color: "white",
        //                         borderColor: "white"
        //                     }
        //                 }}
        //             >Get Started</Button>
        //         </div>
        //     </div>
        // </div>
        // <Grid container>
        //     <Grid item md={6} sm={12}
        //         style={{
        //             background: "black", width: "100%",
        //             height: "100vh", position: "fixed"
        //         }}>
        //         <Typography style={{ color: "white" }}>Welcome</Typography>
        //     </Grid>
        //     <Grid item md={6} sm={0}>
        //         <div style={{ backgroundImage: `url(${homeImage})`, width: "100vw", height: "100vh", backgroundRepeat: 'no-repeat' }} />

        //     </Grid>
        // </Grid>
        // <div style={{ display: "flex", position: "fixed" }}>
        //     <div style={{ width: mdSize ? "50vw" : '100vw', height: "800px", background: "black", position: "fixed", top: "0px", left: "0px", margin: "0px", zIndex: 10 }}>
        //         <Typography variant="h3" color="white" style={{ top: "150px", left: "70px", position: "fixed", fontWeight: 900, width: !mdSize && "100%" }}
        //             sx={{ margin: "auto", width: '50%' }}
        //         >Find your <span style={{ color: '#1fa95b' }}>perfect</span>
        //             <br></br>course & grow <br></br>your <span style={{ color: '#1fa95b' }}>skill</span></Typography>
        //         <Typography style={{ color: "#a7acad", position: "fixed", top: "335px", left: "63px", minWidth: "30%", maxWidth: "80%", overflow: 'none' }}>Unlock Your Potential: Discover a World of Knowledge and Expertise on Our<br></br> Cutting-Edge Course Selling App. Elevate Your Skills, Empower Your Journey<br></br> - Start Learning Today!</Typography>
        //     </div>
        //     <Hidden mdDown>
        //         <div style={{ width: "50vw", height: "800px", backgroundImage: `url(${homeImage})`, position: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", left: "50%", top: "0px" }}></div>
        //     </Hidden>
        // </div>
        // <div style={{ display: "flex", position: "fixed", width: "100%", height: "100%" }}>
        //     <div style={{ width: "50%", height: "800px", background: "black", position: "fixed", top: "0px", left: "0px", margin: "0px", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
        //         <Typography variant="h3" color="white" style={{ fontWeight: 900, marginLeft: "70px", maxWidth: "80%", whiteSpace: "nowrap" }}>
        //             Find your <span style={{ color: '#1fa95b' }}>perfect</span> course & grow your <span style={{ color: '#1fa95b' }}>skill</span>
        //         </Typography>
        //         <Typography style={{ color: "#a7acad", marginLeft: "63px", maxWidth: "80%", marginTop: "10px" }}>
        //             Unlock Your Potential: Discover a World of Knowledge and Expertise on Our Cutting-Edge Course Selling App. Elevate Your Skills, Empower Your Journey - Start Learning Today!
        //         </Typography>
        //     </div>
        //     <Hidden mdDown>
        //         <div style={{ width: "50%", height: "800px", backgroundImage: `url(${homeImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", left: "50%", top: "0px", position: "fixed", backgroundPosition: "center" }}></div>
        //     </Hidden>
        // </div>
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
                <h1 style={{ fontWeight: 900 }}>Our Sponsors</h1>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                    <img src={amazonLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                    <img src={appleLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                    <img src={googleLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                    <img src={spotifyLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                    <img src={slackLogo} alt="" style={{ height: "4rem", width: "10%", margin: "1.3rem", marginRight: "3%", boxSizing: "border-box" }} />
                </div>
            </div>
            <hr style={{ backgroundColor: "grey", height: "6px", width: "100vw", margin: " 100px 0px 0px" }} />
            <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                <Typography>Achieve Your Goals With CourseWise</Typography>
            </div>
        </div>
    )
}

export default LandingPage
