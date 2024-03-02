import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      const conRes = await mongoose.connect(process.env.MONGO_DB_URI!);
      if (conRes) {
        console.log("Sucessfully connected to Mongo");
      } else {
        console.log("Unable to connect to Mongo due to some technical reason.");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;