import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import homeImage from '../images/homeImage.png';
import { useNavigate } from 'react-router-dom';
const CourseCard = (props) => {
    const isWidth = props.width;
    const isHeight = props.height;
    const navigate = useNavigate();
    const { name, price, description, _id, image } = props.course;
    console.log(name);
    return (<Card onClick={() => { navigate(`/course/${_id}`) }}
        variant="elevation"
        sx={{
            maxWidth: 400, width: isWidth === 'true' ? 340 : 'default', height: isHeight === 'true' ? 400 : 'default', transition: "ease-out 0.2s", cursor: "pointer",
            '&:hover': {
                width: isWidth && 400, height: isHeight && 420
            }
        }}
        style={{
            margin: "1rem", marginLeft: "0.5rem",
            boxShadow: "6px 6px 6px 6px black", marginBottom: "2rem"
        }}>
        <CardMedia sx={{ height: 240 }} image={image} title="course" />
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
