import mongoose from "mongoose";



export const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
        });
        console.log("Successfully Connected to mongodb");
    } catch (error) {
        console.log("your error is:"+error);
        process.exit(1);
    }
}

