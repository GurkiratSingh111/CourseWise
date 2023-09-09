import { Button, TextField, Typography } from '@mui/material'
import  { useState } from 'react'
import createCourse from '../images/courselogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateCourse = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const navigate = useNavigate();
     const [coursename, setCoursename] = useState("");
     const [coursedescription, setCoursedescription] = useState("");
     const [courseprice, setCourseprice] = useState(0);
    const [courseimage, setCourseimage] = useState('');

    const coursenameInput = (e) => {
        setCoursename(e.target.value);
    }
    const coursedescriptionInput = (e) => {
        setCoursedescription(e.target.value);
    }
    const coursepriceInput = (e) => {
        setCourseprice(e.target.value);
    }
    const submitImage = async (e) => {
        const imageFile = e.target.files[0];
        const formData = new FormData();
        formData.append('image', imageFile)
        const response = await axios.post("http://localhost:4000/api/v1/imageupload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response.data);
        setButtonDisabled(false);
        setCourseimage(response.data.image.src);
    }
    const submitCourse = async () => {
         await axios.post("http://localhost:4000/api/v1/course", {
            name: coursename,
            price: courseprice,
            description: coursedescription,
            image: courseimage,
        }, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        })
        setCoursename("");
        setCourseprice(0);
        setCourseimage("");
        setCoursedescription("");
        navigate('/admin/mycourses')
    }
    return (
        <div style={{ backgroundColor: "#f7f7f7", color: "black", marginTop: "4rem", overflowY: "auto", height: "100vh", maxWidth: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h2" style={{ margin: "auto", marginBottom: "1rem", marginTop: "5rem", fontWeight: 900, fontFamily: "serif" }}>Create Course</Typography>
            <div style={{ color: "white", maxWidth: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
                    <TextField style={{ margin: "0.5rem" }} value={coursename} id="outlined-username-input" label="Name" type="text" onChange={coursenameInput} />
                    <TextField style={{ margin: "0.5rem" }} value={coursedescription} id="outlined-email-input" label="Description" type="text" onChange={coursedescriptionInput} />
                    <TextField style={{ margin: "0.5rem" }} value={courseprice} id="outlined-price-input" label="Price in dollars" type="number" onChange={coursepriceInput} />
                    <Button style={{ margin: "0.5rem", height: "2rem" }} onChange={submitImage}
                        >
                        <input type="file" id="image" accept="image/*" />
                    </Button>
                    <Button
                        style={{
                            
                            textTransform: 'none',
                            backgroundColor: "#fcb83b",
                            color: 'black',
                            fontWeight: '800',
                            boxShadow: "4px 4px 4px white"
                        }}
                        onClick={submitCourse} disabled={buttonDisabled}>Submit</Button>
                </div>

                <div style={{ maxWidth: "55%" }}>
                    <img src={createCourse} alt="" style={{ height: "16rem", maxWidth: "100%" }} />
                </div>
            </div>
        </div >
    )
}

export default CreateCourse
