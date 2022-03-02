import mongoose from 'mongoose';

const listingSchema = mongoose.Schema({
    name: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    // imgUrl: String,
    // location: String,
    // availability: Boolean,
    // author: String,
})

const Listing = mongoose.model('listings', listingSchema) 
export default Listing;