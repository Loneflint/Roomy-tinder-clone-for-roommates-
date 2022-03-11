import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Listing from './models/listing.js';
import User from './models/user.js';
import userRouter from './router/user.js'
import listingRouter from './router/listing.js'
import userLoginRouter from './router/userLogin.js';

// App Config
// const connection_url = 'mongodb+srv://Loneflint:H4p03WqVOlUnovVU@cluster0.s7klo.mongodb.net/RoomyDB?retryWrites=true&w=majority'
const connection_url = 'mongodb://localhost:27017/roomy'
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded())
app.use(cors())
app.use('/user', userRouter)
app.use('/userlogin', userLoginRouter)
app.use('/listing', listingRouter)

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
})

// Listener
app.listen(port, () => console.log(`listening on port: ${port}`));