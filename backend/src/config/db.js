import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mahauddin:OwlKxymAyMaIIWxb@cluster0.zfzxxwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MONGODB connected successfully")
    } catch (error) {
        console.error("error connecting to database", error)
        process.exit(1) //1 means exit with failure

    }
}