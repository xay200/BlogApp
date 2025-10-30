import express from "express"
import { Register, Login, GoogleLogin, Logout } from "../controllers/Auth.controller.js";

const AuthRoute = express.Router();
AuthRoute.post('/register', Register)
AuthRoute.post('/login', Login)
AuthRoute.post('/google-login', GoogleLogin)
AuthRoute.get('/logout', Logout)

export default AuthRoute