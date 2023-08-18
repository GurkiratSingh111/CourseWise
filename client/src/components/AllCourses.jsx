import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get("http://localhost:4000/api/v1/courses");
        console.log(response.data.courses)
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
        return <div style={{ color: "black", marginTop: "4rem", maxWidth: "100%", display: "flex", flexDirection: "column", justifyContent: "center", }}>
            <Typography variant="h2" style={{ margin: "auto", marginTop: "2rem", width: "40%", fontWeight: 900, fontFamily: "serif" }}>No courses found</Typography>
        </div>
    }

    return (
        <div style={{ color: "black", marginTop: "4rem", maxWidth: "100%", display: "flex", flexDirection: "column", justifyContent: "center", }}>
            <Typography variant="h2" style={{ margin: "auto", marginTop: "2rem", width: "30%", fontWeight: 900, fontFamily: "serif" }}>Popular Courses</Typography>
            <div style={{ color: "white", height: '100vh', maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                {courses.map((course) => {
                    console.log(course);
                    return <CourseCard width='true' height="true" course={course} />
                })}
            </div>
        </div>
    )
}

export default AllCourses
