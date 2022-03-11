import express from 'express';
import { postUser } from '../controler/user.js'

const router = express.Router()

router.post('/post', postUser)
// router.get('/get', getUser)

export default router;