'use strict';

import express from 'express'
import BaseComponent from '../prototype/baseComponent'
import User from '../controller/v2/user'
const baseHandle = new BaseComponent();
const router = express.Router();

router.get('/users/list', User.getUserList);
router.get('/users/count', User.getUserCount);

 
export default router