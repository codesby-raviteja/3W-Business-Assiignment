import mongoose from "mongoose";

const connectDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://ravitejayellam22:00nyHiWcVXLYPh3i@leaderboard.crztt0e.mongodb.net/3WAssignment?retryWrites=true&w=majority&appName=LeaderBoard"
  );
};


export default connectDatabase