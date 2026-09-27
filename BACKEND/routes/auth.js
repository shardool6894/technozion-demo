const express = require('express')
const authRouter = express.Router();

const {register,login} = require('../controllers/authController')

// NOTE: multer removed — the backend expects either JSON metadata, pre-uploaded URLs,
// or base64 image strings in the request body. Files should be uploaded to Cloudinary
// directly from the client or sent as base64 strings.
authRouter.post('/register', register)
authRouter.post('/login', login)

module.exports = authRouter