import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://DerekMean2:OP6B8lUsC71HOr53@beachtrack.z3sm6.mongodb.net/main?retryWrites=true&w=majority&appName=BeachTrack')
    console.log("DB Connected");
}