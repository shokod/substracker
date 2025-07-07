
import mongoose from "mongoose";
import { DATABASE_URI, NODE_ENV } from "../config/env.js";
import  process from 'process';

if (NODE_ENV === "development") {
  mongoose.set("debug", true);
}
if (!DATABASE_URI) {
  throw new Error("DATABASE_URI is not defined");
}

const dbconnect = async () => {
    try{
        await mongoose.connect(DATABASE_URI);
        console.log(`Connected to the database successfully in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Error connecting to the database",error); 
        process.exit(1);

    }
}

export  default dbconnect
