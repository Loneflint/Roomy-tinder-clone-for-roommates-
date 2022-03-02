import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Listing from './models/dbListings.js';
import User from './models/user.model';
import userRouter from './router/user.js'

// App Config
// const connection_url = 'mongodb+srv://Loneflint:H4p03WqVOlUnovVU@cluster0.s7klo.mongodb.net/RoomyDB?retryWrites=true&w=majority'
const connection_url = 'mongodb://localhost:27017/roomy'
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/user', userRouter)

// DB Config
mongoose.connect(connection_url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req,res) => res.status(200).send('hello freaks'));
app.post('/rommy/listing', async (req, res) => {
    const dbListing = req.body;
    // console.log(dbListing)
    const newDbListing = new Listing({ ...dbListing, createdAt: new Date().toISOString() })
    console.log(newDbListing)
    try {
        await newDbListing.save();

        res.status(201).json(newDbListing);
    } catch (e) {
        res.status(409).json({message: e});
    }
});

app.get('/rommy/listing', (req, res) => {
    Listing.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});



// Listener
app.listen(port, () => console.log(`listening on port: ${port}`));