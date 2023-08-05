import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import homeImage from '../images/homeImage.png';
const CourseCard = (props) => {
    const { name, image, price, description } = props.course;
    console.log(name);
    return (<Card variant="elevation" sx={{ maxWidth: 354, height: 400 }} style={{ marginTop: "5rem", marginLeft: "3rem" }}>
        <CardMedia sx={{ height: 240 }} image={homeImage} title="course" />
        <CardContent>
            <Typography variant='h5'>{name}</Typography>
            <Typography variant='body2'>{description}</Typography>
            <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "space-between" }}>
                <span>{price}</span>
            </div>

        </CardContent>
    </Card>
    )
}

export default CourseCard
