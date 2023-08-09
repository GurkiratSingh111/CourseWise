import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import homeImage from '../images/homeImage.png';
import { useNavigate } from 'react-router-dom';
const CourseCard = (props) => {
    const navigate = useNavigate();
    const { name, price, description, _id } = props.course;
    console.log(name);
    return (<Card onClick={() => { navigate(`/course/${_id}`) }} variant="elevation" sx={{ maxWidth: 354 }} style={{ marginTop: "1rem", marginLeft: "3rem" }}>
        <CardMedia sx={{ height: 240 }} image={homeImage} title="course" />
        <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
                <Typography variant='subtitle1' style={{ fontWeight: 900 }}>{name}</Typography>
                <Typography variant='body2'>{description}</Typography>
            </div>
            <div style={{ height: "2rem", width: "3rem", borderRadius: "6px", backgroundColor: '#fcb83b', display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "800" }}>
                <span>${price}</span>
            </div>
        </CardContent>
    </Card>
    )
}

export default CourseCard
