import mongoose from 'mongoose';

const listingSchema = mongoose.Schema({
    price: String,
    address: String,
    description: String,
    img: Buffer,

    // availability: Boolean,
    // poster: String,
   
    createdAt: {
        type: Date,
        default: new Date(),
    }, 
    
})

const Listing = mongoose.model('listings', listingSchema) 
export default Listing;