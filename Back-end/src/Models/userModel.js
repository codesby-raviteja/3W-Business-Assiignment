import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    rank: { type: Number },
    totalPoints: { type: Number },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);


export default UserModel