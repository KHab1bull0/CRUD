
import { Router } from "express";
import { userLogin, userRegister, userProfile, allUser } from "../controllers/user.controller.js";
export const user = Router()


user.post('/register', userRegister)

user.post('/login', userLogin)

user.get('/profile/:username', userProfile)

user.get('/profile', allUser)

