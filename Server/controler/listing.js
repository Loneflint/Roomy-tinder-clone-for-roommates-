import Listing from '../models/listing.js'

export const postListing = async (req, res) => {
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
};
