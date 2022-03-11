import User from '../models/user.js'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const postUserLogin = async (req, res) => {
    const userLogin = req.body;
    const loginEmail = userLogin.email
    const loginPassword = userLogin.password
    // const {auth, setAuth } = useContext(AuthContext)

    try {
        const sanitizedLoginEmail = loginEmail.toLowerCase()
        const existingUser = await User.findOne({email: sanitizedLoginEmail})
        const correctPassword = await bcrypt.compare(loginPassword, existingUser.hashed_password)

        if (existingUser && correctPassword) {
            const token = jwt.sign( existingUser.toObject(), sanitizedLoginEmail, {
                expiresIn: 60 * 24,
            })
            
            console.log('login successful')
            return (
                'success'
            )
        } else {
            console.log('login failed')
        }
    } catch (e) {
        
        res.status(409).json({message: e});
    }
};


