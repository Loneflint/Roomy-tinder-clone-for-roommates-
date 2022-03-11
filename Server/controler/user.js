import User from '../models/user.js'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const postUser = async (req, res) => {
    const dbUser = req.body;
    const generatedUserId = uuidv4()
    const dbUserEmail = dbUser.email
    const hashedPassword = await bcrypt.hash(dbUser.password, 10)
    
    
    // const newDbUser = new User({ ...dbUser, createdAt: new Date().toISOString() })
    // console.log(newDbUser)



    try {
        const sanitizedEmail = dbUserEmail.toLowerCase()
        const existingDbUser = await User.findOne({email: sanitizedEmail})
        // console.log(existingUser.email)
        console.log(existingDbUser)
        if (existingDbUser) {
            return res.status(409).send('User already exists. Please login'),
            console.log('user exists')
        } else {
       
        const data = {
            username: dbUser.username,
            user_id: generatedUserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword,
        }
        const newDbUser = new User({ ...data, createdAt: new Date().toISOString() })
    

        const token = jwt.sign( newDbUser.toObject(), sanitizedEmail, {
            expiresIn: 60 * 24,
        })
        console.log(newDbUser.toObject())

        await newDbUser.save();
    
        res.status(201).json({token, userId:generatedUserId, email: sanitizedEmail})
    }
        
    } catch (e) {
        // console.log()
        res.status(409).json({message: e});
    }
    }

//     try {
//         const existingUser = await users.findOne({dbUserEmail})

//         if (existingUser) {
//             return res.status(409).send('User already exists. Please login'),
//             console.log('user exists')
//         }
//     }
//      catch (e) {
//         try {
//             await newDbUser.save();
    
//             res.status(201).json(newDbUser);
//         } catch (e) {
//             res.status(409).json({message: e});
//         }
//     }
// }
