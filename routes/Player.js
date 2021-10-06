import express from 'express';
const router = express.Router();
import User from '../models/User.js';

router.get('/',async(req, res) => {
    try {
        const response = await User.find();
        res.json({users:response});
    } catch (error) {
        res.status(501).json({mess:error.message});
    }
})

router.post('/', async(req, res) => {
    const {username,score} = req.body;
    

    try {
        const user = new User({username, score});
        await user.save();
        res.status(201).json({success: true});
    } catch (error) {
        console.log(error);
    }
});

export default router;