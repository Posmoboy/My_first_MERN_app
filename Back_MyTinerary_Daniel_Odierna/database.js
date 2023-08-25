import mongoose from "mongoose";

process.env.DATABASE_URL



mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log("Database connection failed"));

 export default mongoose;