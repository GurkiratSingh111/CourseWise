import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard';
import { Typography } from '@mui/material';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const fetchData = async () => {
        const response = await axios.get("http://localhost:4000/api/v1/courses");
        console.log(response.data.courses)
        setCourses(response.data.courses);
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div style={{ color: "white", backgroundColor: "black", height: '100%', marginTop: "3rem", maxWidth: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h2" style={{ margin: "auto", marginTop: "2rem", width: "30%", fontWeight: 900, fontFamily: "serif" }}>Popular Courses</Typography>
            <div style={{ color: "white", backgroundColor: "black", height: '100vh', maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                {courses.map((course) => {
                    return <CourseCard course={course} />
                })}
            </div>
        </div>
    )
}

export default AllCourses
