import mongoose from "mongoose";
export default function connectWithMongo() {
    const mongourl = process.env.MONGO || "";
    mongoose.connect(mongourl).then(()=> {
        console.log("MongoDB is connected!");
    }).catch((err) => {
        console.log("Database connection failed \n error message: "+ err.message);
    })
}