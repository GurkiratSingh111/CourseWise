import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import HomeImage from '../images/homeImage.png'
//import { Loading } from "./Loading";
//import { BASE_URL } from "../config.js";
import { courseState } from "../store/atoms/course";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseName, coursePrice, isCourseLoading, courseImage } from "../store/selector/course";


function Course() {
    let { courseId } = useParams();
    const setCourse = useSetRecoilState(courseState);
    const courseLoading = useRecoilValue(isCourseLoading);

    const getCourse = async () => {
        const response = await axios.get(`http://localhost:4000/api/v1/course/${courseId}`)
        console.log(response.data.course);
        setCourse({ isLoading: false, course: response.data.course });
    }
    useEffect(() => {
        getCourse();
    }, []);

    // if (courseLoading) {
    //     return <Loading />
    // }

    return <div style={{ overflowX: "hidden" }}>
        <GrayTopper />
        <Grid container>
            <Grid item lg={4} md={12} sm={12}>
                <SingleCard />
            </Grid>
        </Grid>
    </div>
}

function GrayTopper() {
    const name = useRecoilValue(courseName);
    return <div style={{ display: "flex", height: 300, background: "#212121", width: "100vw", zIndex: 0, marginBottom: -150, justifyContent: "center", alignItems: "center " }}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div>
                <Typography style={{ color: "white", fontWeight: 600 }} variant="h4" textAlign={"center"}>
                    {name}
                </Typography>
            </div>
        </div>
    </div>
}

function UpdateCard() {
    const [courseDetails, setCourse] = useRecoilState(courseState);

    const [name, setName] = useState(courseDetails.course.name);
    const [description, setDescription] = useState(courseDetails.course.description);
    const [image, setImage] = useState(courseDetails.course.imageLink);
    const [price, setPrice] = useState(courseDetails.course.price);

    return <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ maxWidth: 600, marginTop: 200 }}>
            <div style={{ padding: 20 }}>
                <Typography style={{ marginBottom: 10 }}>Update course details</Typography>
                <TextField
                    value={name}
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />

                <TextField
                    value={description}
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />

                <TextField
                    value={image}
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />
                <TextField
                    value={price}
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    fullWidth={true}
                    label="Price"
                    variant="outlined"
                />

                <Button
                    variant="contained"
                    onClick={async () => {
                        axios.put(`http://localhost:4000/course/` + courseDetails.course._id, {
                            name: name,
                            description: description,
                            imageLink: image,
                            published: true,
                            price
                        }, {
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        let updatedCourse = {
                            _id: courseDetails.course._id,
                            name: name,
                            description: description,
                            imageLink: image,
                            price
                        };
                        setCourse({ course: updatedCourse, isLoading: false });
                    }}
                > Update course</Button>
            </div>
        </Card>
    </div>
}

function SingleCard(props) {

    const name = useRecoilValue(courseName);
    const imageLink = useRecoilValue(courseImage);
    const price = useRecoilValue(coursePrice)

    return <div style={{ display: "flex", marginTop: 70, justifyContent: "center", width: "90%" }}>
        <Card style={{
            margin: 10,
            width: 350,
            minHeight: 200,
            borderRadius: 20,
            marginRight: 50,
            paddingBottom: 15,
            zIndex: 2
        }}>
            <img src={HomeImage} style={{ width: 350 }} ></img>
            <div style={{ marginLeft: 10 }}>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="subtitle1" style={{ color: "gray" }}>
                    Price  <b>$ {price} </b>
                </Typography>
            </div>
        </Card>
    </div>
}

export default Course;