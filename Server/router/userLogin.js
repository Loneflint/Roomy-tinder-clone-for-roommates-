import express from 'express';
import { postUserLogin } from '../controler/userLogin.js'

const router = express.Router()

router.post('/post', postUserLogin)
// router.get('/get', getUser)

export default router;