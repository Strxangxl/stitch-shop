import mongoose from "mongoose";

const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true
        })
    
        console.log("Database connected successfully...")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connection;