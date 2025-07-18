import express from "express";
import UserModel from "../Models/userModel.js";
import claimPoinstHistoryModel from "../Models/ClaimPointsModel.js";

const userRoute = express.Router();

//Creating A new User
userRoute.post("/create/user", async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const trimmedName = name.trim();
    const trimmedImageUrl = imageUrl.trim();

    if (!trimmedName || !trimmedImageUrl) {
      return res.status(400).json({ error: "Please enter valid Details" });
    }

    if (trimmedName > 50) {
      return res
        .status(406)
        .json({ error: "Name cannot be greater than 50 characters" });
    }
    if (trimmedImageUrl > 250) {
      return res
        .status(406)
        .json({ error: "image Url cannot be greater than 250 characters" });
    }

    const totalUsers = await UserModel.countDocuments();
    const rank = totalUsers + 1;

    const user = new UserModel({
      name: trimmedName,
      imageUrl: trimmedImageUrl,
      rank,
      totalPoints: 0,
    });

    console.log("totalUsers", totalUsers);

    const savedUser = await user.save();

    res.status(200).json({ status: 200, message: "user successfully created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      error: "Internal server error while creating user",
    });
  }
});

//Geting all user sorted acc to rank
userRoute.get("/users", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const totalUsers = await UserModel.countDocuments();

    //Database querying to get maxmam 10 users at a time based on rank in acending order
    const users = await UserModel.find({})
      .skip(skip)
      .limit(limit)
      .sort({ rank: +1 });


    //sending data back to client
    res.status(200).json({
      status: 200,
      data: {
        users,
        totalUsers: totalUsers,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: "Internal server error while creating user",
    });
  }
});

//crediting Claim poinst
userRoute.post("/claimpoints/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ status: 400, error: "invalid user id." });
    }


    //Finding whether user exits in Database or not
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ status: 404, message: "user not found " });
    }


    //Assigning random poinst
    const randomPoints = Math.floor(Math.random() * 10) + 1;

    user.totalPoints += randomPoints;
    await user.save();


    //finding claimPoinstHistory if exits , if not creating a new one and updating points in it
    let claimPoinstHistory = await claimPoinstHistoryModel.findOne({ userId });
    if (!claimPoinstHistory) {
      claimPoinstHistory = new claimPoinstHistoryModel({
        userId,
        history: [],
      });
    }
    claimPoinstHistory.history.push({ points: randomPoints });
    await claimPoinstHistory.save();

    // Fetching all the users based on totalPoinst in decending order
    const users = await UserModel.find({}).sort({ totalPoints: -1 });

    // Assigning ranks to user based on totalPoinst and updaing Database
    for (let i = 0; i < users.length; i++) {
      users[i].rank = i + 1;
      await users[i].save();
    }
    res.status(200).json({ status: 200, pointsAdded: randomPoints });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, error: "Server internal Error" });
  }
});

export default userRoute;
