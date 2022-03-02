import User from '../models/user.model.js'


export const getUser = async (req, res) => {
    const dbUser = req.body;
    // console.log(dbListing)
    const newDbUser = new User({ ...dbUser, createdAt: new Date().toISOString() })
    console.log(newDbUser)
    try {
        await newDbUser.save();

        res.status(201).json(newDbUser);
    } catch (e) {
        res.status(409).json({message: e});
    }
};