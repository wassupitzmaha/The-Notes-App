import mongoose from "mongoose";


// now process.env.MONGO_URI will be populated


export const connectDB = async () => {
    try {
        await mongoose.connect( 
            
            process.env.MONGO_URI

        )
        console.log("MONGODB connected successfully")
    } catch (error) {
        console.error("error connecting to database", error)
        process.exit(1) //1 means exit with failure

    }
}