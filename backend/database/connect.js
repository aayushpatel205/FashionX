import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const username = process.env.DB_USERNAME;
const pwd = process.env.DB_PASSWORD;

const connectDatabase = async()=>{
    const URL = `mongodb+srv://${username}:${pwd}@fashionx-website.sjfkg.mongodb.net/?retryWrites=true&w=majority&appName=fashionx-website`
    try{
        await mongoose.connect(URL);
        console.log("Database connected");
    }catch(err){
        console.log(err);
    }
};

export default connectDatabase;