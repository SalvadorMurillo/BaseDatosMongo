import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://salvadormurillo612:yp8PkE3AyHmohEEL@cluster0.uy9ifkk.mongodb.net/login4?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
