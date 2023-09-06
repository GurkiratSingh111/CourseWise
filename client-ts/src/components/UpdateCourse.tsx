function UpdateCourse() {
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
export default UpdateCourse;
