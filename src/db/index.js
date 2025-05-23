import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async ()=>{

    try { 
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("Mongoose connection Failed",error);
        process.exit(1); //exit the process with a faliure
    }

}
export default connectDB;
