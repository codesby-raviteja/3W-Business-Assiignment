import mongoose from "mongoose";



// A separate Schema for Points history
const pointsHistory = new mongoose.Schema(
  {
    points: { type: Number },
  },
  { timestamps: true }
);




//Claim Points History Schemaa
const claimPointsModelSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  history: [pointsHistory],
});

const claimPoinstHistoryModel = mongoose.model(
  "claimPoinstHistory",
  claimPointsModelSchema
);

export default claimPoinstHistoryModel;
