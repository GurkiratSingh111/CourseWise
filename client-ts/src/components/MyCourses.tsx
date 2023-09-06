import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:4000/api/v1/admin/courses', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        setCourses(response.data.courses);
        setLoading(false);
    }
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 1000);
    }, [])
    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: "5rem" }}>
            <CircularProgress size="20rem" sx={{ color: "black" }} />
        </Box>

    }

    if (courses.length === 0) {
        return <div style={{ backgroundColor: "black", color: "white", marginTop: "4rem", maxWidth: "100%", display: "flex", flexDirection: "column", height: "100vh" }}>
            <Typography variant="h2" style={{ marginLeft: "2rem", marginTop: "4rem", fontWeight: 900, fontFamily: "serif" }}>No course created yet...</Typography>
            <Typography variant="body1" style={{ marginLeft: "2rem", marginTop: "2rem", width: "50%", fontWeight: 900, fontFamily: "serif" }}>Your expertise and passion are the perfect foundation
                for an exceptional course that will ignite curosity and drive in eager minds.Your knowledge has the power to shape the next generation of
                learners</Typography>
            <Button
                style={{
                    width: "15%",
                    marginLeft: "2rem",
                    marginTop: "2rem",
                    textTransform: 'none',
                    backgroundColor: "#fcb83b",
                    color: 'black',
                    fontWeight: '800',
                    boxShadow: "4px 4px 4px white",
                }}
                onClick={() => { navigate('/admin/createcourse') }}>Create Course</Button>

        </div >
    }

    return (
        <div style={{ color: "black", marginTop: "4rem", maxWidth: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h2" style={{ margin: "auto", marginTop: "2rem", width: "30%", fontWeight: 900, fontFamily: "serif" }}>My Courses</Typography>
            <div style={{ color: "white", height: '100vh', maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                {courses.map((course) => {
                    console.log(course);
                    return <CourseCard width='true' height="true" course={course} />
                })}
            </div>
        </div>
    )
}

export default MyCourses
