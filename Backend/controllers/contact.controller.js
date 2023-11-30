import User from "../models/User.model.js";

export const getUser = async (req, res, next) => {
  const { userName, email, phone ,message } = req.body;
  try {
    const newUser = new User({
      userName,
      email,
      phone,
      message
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};
