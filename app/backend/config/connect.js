import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pnyrwplecture:hello123@cluster0.0usf2io.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`database connected on host:${mongoose.connection.host.cyan}`);
};
