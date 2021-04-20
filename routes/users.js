import express from 'express';

import { getUser, createUser, userDetails, deleteUser, updateUser} from '../controllers/users.js'

const router = express.Router();

// read  
router.get('/',getUser)

// create 
router.post('/',createUser)

// read by id 
router.get('/:id',userDetails)

// delete 
router.delete('/:id',deleteUser)

// update 
router.patch('/:id',updateUser)


export default router;