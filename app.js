const express = require('express');
const app = express();
const adminAuthRouter = require('./routes/adminAuthRoutes')
const userAuthRouter = require('./routes/userAuthRoutes')

app.use('/api/v1', adminAuthRouter);
app.use('/api/v1', userAuthRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})

