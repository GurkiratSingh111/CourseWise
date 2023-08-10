import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import HomeImage from '../images/homeImage.png'
import { courseState } from "../store/atoms/course";
import { useRecoilState, useRecoilValue } from "recoil";
import { courseName, coursePrice, isCourseLoading, courseImage } from "../store/selector/course";


function Course() {
    let { courseId } = useParams();
    const [courseDetails, setCourse] = useRecoilState(courseState);

    const getCourse = async () => {
        const response = await axios.get(`http://localhost:4000/api/v1/course/${courseId}`)
        console.log(response.data.course);
        setCourse({ isLoading: false, course: response.data.course });
    }
    useEffect(() => {
        getCourse();
    }, []);

    return <div style={{ height: "100%", width: "100%", marginTop: "3.5rem" }}>
        <div style={{
            color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            backgroundImage: `url(${courseDetails?.course?.image})`, backgroundSize: 'cover', marginTop: "2rem", height: "300px", opacity: "1"
        }}>
            <Typography variant="h3" style={{ marginBottom: "1rem" }}>{courseDetails?.course?.name}</Typography>
            <Typography variant="h6" style={{ color: "orange", marginBottom: "1rem" }}>$ {courseDetails?.course?.price}</Typography>
            <Button variant="outlined" style={{ marginBottom: "1rem", borderColor: "orange", color: "orange" }} sx={{
                '&:hover': {
                    backgroundColor: "#3c3c3b"
                }
            }}>Buy Course</Button>
        </div>
        <Typography variant="h5" style={{ marginTop: "3rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
            {courseDetails?.course?.description}
        </Typography>
    </div>
}
export default Course;



