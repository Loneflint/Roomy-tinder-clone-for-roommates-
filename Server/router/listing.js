import express from 'express';
import { postListing } from '../controler/listing.js'

const router = express.Router()

router.post('/post', postListing)
// router.get('/get', getUser)

export default router;