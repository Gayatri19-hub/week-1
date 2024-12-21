import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://zagadegayatri19:Vor4oHHuU6WeODNL@spotify-clone.icbev.mongodb.net/?retryWrites=true&w=majority&appName=Spotify-Clone";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch(err => console.error("Database connection error:", err));