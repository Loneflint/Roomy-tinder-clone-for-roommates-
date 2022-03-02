import express from 'express';
import { getUser } from '../controler/user.js'

const router = express.Router()


router.get('/get', getUser)

export default router;