import { useRecoilState } from "recoil";
import { courseState } from "../store/atoms/course";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import createCourse from '../images/courselogo.png';

function UpdateCourse() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const navigate = useNavigate();
    const [courseDetails, setCourse] = useRecoilState(courseState);
    console.log("These are the course details", courseDetails);
    const [name, setName] = useState(courseDetails.course.name);
    const [description, setDescription] = useState(courseDetails.course.description);
    const [image, setImage] = useState(courseDetails.course.imageLink);
    const [price, setPrice] = useState(courseDetails.course.price);

    const coursenameInput = (e) => {
        setName(e.target.value);
    }
    const coursedescriptionInput = (e) => {
        setDescription(e.target.value);
    }
    const coursepriceInput = (e) => {
        setPrice(e.target.value);
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
        setImage(response.data.image.src);
    }
    const updateCourse = async () => {
        await axios.patch(`http://localhost:4000/api/v1//courseadmin/${courseDetails.course.id}`, {
           name: name,
           price: price,
           description: description,
           image: image,
       }, {
           headers: {
               "Authorization": "Bearer " + localStorage.getItem("token"),
               'Content-Type': 'application/json'
           }
       })
       setName("");
       setPrice(0);
       setImage("");
       setDescription("");
       setCourse({
           isLoading: true,
           course: null
       })
       navigate('/admin/mycourses');
   }
    return (
        <div style={{ backgroundColor: "#f7f7f7", color: "black", marginTop: "4rem", overflowY: "auto", height: "100vh", maxWidth: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h2" style={{ margin: "auto", marginBottom: "1rem", marginTop: "5rem", fontWeight: 900, fontFamily: "serif" }}>Update Course</Typography>
            <div style={{ color: "white", maxWidth: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
                    <TextField style={{ margin: "0.5rem" }} value={name} id="outlined-username-input" label="Name" type="text" onChange={coursenameInput} />
                    <TextField style={{ margin: "0.5rem" }} value={description} id="outlined-email-input" label="Description" type="text" onChange={coursedescriptionInput} />
                    <TextField style={{ margin: "0.5rem" }} value={price} id="outlined-price-input" label="Price in dollars" type="number" onChange={coursepriceInput} />
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
                        onClick={updateCourse} disabled={buttonDisabled}>Update Course</Button>
                </div>

                <div style={{ maxWidth: "55%" }}>
                    <img src={createCourse} alt="" style={{ height: "16rem", maxWidth: "100%" }} />
                </div>
            </div>
        </div>
    )
}
export default UpdateCourse;


