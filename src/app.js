import express from "express"
import cookieParser from "cookie-parser" //to access or set the cookies in browser from my server //preforming CRUD operation
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))   //the .use is used to configr middlewares

app.use(express.json({limit: "16kb"})) //to accept json data
app.use(express.urlencoded({extended:true,limit:"16kb"})) //to accept the data from URL //extended is used to give nested objects
app.use(express.static("public")) //so we can store the files or images in an open folder which can be accessed by anyone
app.use(cookieParser()) 

export {app}