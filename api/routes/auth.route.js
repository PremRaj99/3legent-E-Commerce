import express from 'express';
import { signin, signout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// define all routes
router.post("/signup", signup)
router.post("/signin", signin)
router.post("/signout", signout)

export default router;