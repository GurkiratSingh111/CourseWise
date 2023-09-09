import { Box,CircularProgress} from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import { courseState } from "../store/atoms/course";
import { useRecoilState, useRecoilValue } from "recoil";
import { userRoleState } from "../store/selector/userRole";
import { userIdState } from "../store/selector/userId";


function Course() {
    const [createdBy, setCreatedBy] = useState("");
    const id = useRecoilValue(userIdState);
    const navigate = useNavigate();
    const role = useRecoilValue(userRoleState);
    const userRole = role === 'user';
    const adminRole = role === 'admin';
    console.log("The role is", role);
    const { courseId } = useParams();
    const [courseDetails, setCourse] = useRecoilState(courseState);
    const [isLoading, setIsLoading] = useState(true);
    const myCourse = String(id) === String(createdBy);
    console.log(myCourse, id, createdBy);

    const getCourse = async () => {
        const response = await axios.get(`http://localhost:4000/api/v1/course/${courseId}`)
        console.log(response.data.course);
        setCreatedBy(response.data.course.createdBy);
        console.log("lalalaalalalalaall", response.data.course);
        const course = { 
            isLoading: false, 
            course: {
                id: response.data.course._id,
                name: response.data.course.name,
                description: response.data.course.description,
                price: response.data.course.price,
                imageLink: response.data.course.image,
                createdBy: response.data.course.createdBy,
                published: response.data.course.published
            }
        }
        setCourse(course);
        setIsLoading(false);
    }
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getCourse();
        }, 1500);

    }, []);

    if (isLoading === true) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: "5rem" }}>
            <CircularProgress size="20rem" sx={{ color: "black" }} />
        </Box>
    }
    const updateCourse = () => {
        navigate('/admin/updatecourse');
    }
    const deleteCourse = async () => {
        const response = await axios.delete(`http://localhost:4000/api/v1//courseadmin/${courseId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        })
        console.log(response);
        navigate('/admin/mycourses');
    }


    return <div style={{ height: "100%", width: "100%", marginTop: "3.5rem" }}>
        <div style={{
            color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            backgroundImage: `url(${courseDetails.course.imageLink})`, filter: "brightness(80%)", backgroundSize: 'cover', marginTop: "2rem", height: "300px", opacity: "1"
        }}>
            <Typography variant="h3" style={{ marginBottom: "1rem", color: "black" }}>{courseDetails.course.name}</Typography>
            <Typography variant="h6" style={{ color: "black", marginBottom: "1rem" }}>$ {courseDetails.course.price}</Typography>
            {userRole && <Button variant="outlined" style={{ marginBottom: "1rem", borderColor: "black", color: "black" }} sx={{
                '&:hover': {
                    backgroundColor: "#3c3c3b"
                }
            }}>Buy Course</Button>}
            {myCourse && adminRole && <Button onClick={updateCourse} variant="outlined" style={{ marginBottom: "1rem", borderColor: "black", color: "black" }} sx={{
                '&:hover': {
                    backgroundColor: "#3c3c3b"
                }
            }}>Update Course</Button>}
            {(myCourse && adminRole) && <Button onClick={deleteCourse} variant="outlined" style={{ marginBottom: "1rem", borderColor: "black", color: "black" }} sx={{
                '&:hover': {
                    backgroundColor: "#3c3c3b"
                }
            }}>Delete Course</Button>}
        </div>
        <Typography variant="h5" style={{ marginTop: "3rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
            {courseDetails.course.description}
        </Typography>
    </div>
}
export default Course;



