import express from 'express';
import { postUserData } from '../controllers/user-controller.js';
import { getUsersData } from '../controllers/user-controller.js';
import { getUserById } from '../controllers/user-controller.js';
import { delUser } from '../controllers/user-controller.js';

const userRoute = express.Router();

userRoute.post('/createUser', postUserData );
userRoute.get('/getUser', getUsersData );
userRoute.get('/getUser/:id', getUserById );
userRoute.delete('/delUser/:id', delUser );

//learn find query and routes make APi of delete and update


export default userRoute