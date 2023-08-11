import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard';
import { Typography } from '@mui/material';

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const fetchData = async () => {
        const response = await axios.get('http://localhost:4000/api/v1/admin/courses', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        setCourses(response.data.courses);
    }
    useEffect(() => {
        fetchData();
    }, [])

    if (courses.length === 0) {
        return <div style={{ color: "black", marginTop: "4rem", maxWidth: "100%", display: "flex", flexDirection: "column", justifyContent: "center", }}>
            <Typography variant="h2" style={{ margin: "auto", marginTop: "2rem", width: "40%", fontWeight: 900, fontFamily: "serif" }}>No courses found</Typography>
        </div>
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
