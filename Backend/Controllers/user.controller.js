const User = require("../Models/user.model");

// Get User Detail
exports.getUserDetail = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

// Get All Users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, users });
  } catch (error) {
    return next(error);
  }
};

// Delete User -- Admin
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    return next(error);
  }
};
