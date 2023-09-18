import mongoose from "mongoose"

const connectToDb = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log("MongoDB Atlas CONNECTED!")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.stack);
  }
}

export default connectToDb
